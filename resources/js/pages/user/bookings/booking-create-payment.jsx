import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IconCreditCard, IconCurrencyDollar, IconMoneybag } from '@irsyadadl/paranoid';
import { formatRupiah } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { router } from '@inertiajs/react';

export default function BookingCreatePayment({ booking, remaining_payment, openPaymentBookingDialog, setOpenPaymentBookingDialog }) {
    const [paymentType, setPaymentType] = useState('full');
    const [downPaymentAmount, setDownPaymentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [loading, setLoading] = useState(false);

    const minimumDownPayment = booking.amount * booking.package.minimum_dp_percent / 100;
    const isPaymentExist = booking.payments && booking.payments.length > 0;
    const isPaymentPaidfully = remaining_payment === 0;

    const formatNumber = (value) => {
        return new Intl.NumberFormat('id-ID').format(value);
    };

    const parseNumber = (value) => {
        const parsed = parseInt(value.replace(/\./g, ''), 10);
        return isNaN(parsed) ? 0 : parsed;
    };

    const createPayment = async () => {
        try {
            setLoading(true);
            const amountToPay = paymentType === 'down_payment' ? parseNumber(downPaymentAmount) : remaining_payment;
            if (paymentType === 'down_payment' && amountToPay < minimumDownPayment) {
                Swal.fire({
                    icon: 'warning',
                    title: 'DP Tidak valid',
                    timer: 3000,
                    showCancelButton: true,
                    focusConfirm: false,
                    text: `Jumlah uang muka harus minimal ${formatRupiah(minimumDownPayment)}.`
                });
                setLoading(false);
                return;
            }
            const response = await axios.post(route('payments.store'), {
                booking_invoice: booking.invoice,
                amount: amountToPay,
                payment_type: paymentType,
                method: paymentMethod
            });
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message,
                showCancelButton: true,
                timer: 3000,
            }).then((result) => {
                if (result.isConfirmed || result.isDismissed) {
                    router.visit(route('bookings.show', booking.invoice), { method: 'get' });
                    setOpenPaymentBookingDialog(false);
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                timer: 3000,
                text: error.response.data.message
            }).then(() => {
                if (error.response.status === 409) {
                    router.visit(route('bookings.show', booking.invoice), { method: 'get' });
                }
                setOpenPaymentBookingDialog(false);
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDownPaymentChange = (e) => {
        const value = e.target.value;
        const parsedValue = parseNumber(value);
        const formattedValue = value === '' ? '' : formatNumber(parsedValue);
        setDownPaymentAmount(formattedValue);
    };

    const handlePaymentCreation = () => {
        if (!paymentMethod) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                timer: 3000,
                text: 'Mohon pilih Metode Pembayaran.'
            });
            return;
        }
        createPayment();
    };

    return (
        <div>
            <Dialog open={openPaymentBookingDialog} onOpenChange={setOpenPaymentBookingDialog}>
                <DialogContent className="p-0 sm:max-w-[500px]">
                    <DialogHeader className="p-8">
                        <DialogTitle>Pilih Pembayaran</DialogTitle>
                    </DialogHeader>
                    <div className="px-8 py-5 pt-0">
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <Button
                                variant={paymentType === 'full' ? 'default' : 'outline'}
                                className="w-full mt-1"
                                disabled={isPaymentPaidfully}
                                onClick={() => setPaymentType('full')}
                            >
                                <IconCurrencyDollar className="mr-2 w-4" /> Full ({formatRupiah(remaining_payment)})
                            </Button>
                            <Button
                                variant={paymentType === 'down_payment' ? 'default' : 'outline'}
                                className="w-full mt-1"
                                disabled={isPaymentExist}
                                onClick={() => setPaymentType('down_payment')}
                            >
                                <IconMoneybag className="mr-2 w-4" /> Uang Muka
                            </Button>
                        </div>
                        {paymentType === 'down_payment' && (
                            <div className="my-5">
                                <Label>Jumlah Uang Muka</Label>
                                <Input
                                    type="text"
                                    className="w-full mt-1"
                                    value={downPaymentAmount}
                                    onChange={handleDownPaymentChange}
                                    placeholder={`Minimal ${formatRupiah(minimumDownPayment)}`}
                                />
                            </div>
                        )}
                        <Label>Metode Pembayaran</Label>
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            {['online', 'offline'].map((method) => (
                                <Button
                                    key={method}
                                    variant={paymentMethod === method ? 'default' : 'outline'}
                                    className="w-full mt-1"
                                    onClick={() => setPaymentMethod(method)}
                                >
                                    {method === 'online' ? 'Online' : null}
                                    {method === 'offline' ? 'Offline' : null}
                                </Button>
                            ))}
                        </div>
                        <Button variant="default" className="w-full mt-3" onClick={handlePaymentCreation}>
                            {loading ? 'Memproses...' : <><IconCreditCard className="mr-2 w-4" /> Proses Pembayaran</>}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
