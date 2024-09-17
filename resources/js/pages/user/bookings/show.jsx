import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { formatDateTime, formatRupiah } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Layout } from '@/layouts/users/layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import BookingCreatePayment from './booking-create-payment';

export default function BookingShow({ booking, remaining_payment }) {
    const [openPaymentBookingDialog, setOpenPaymentBookingDialog] = useState(false);

    const handlePayment = (snap_token) => {
        window.snap.pay(snap_token, {
            onSuccess: function (result) {
                console.log(result);
            },
            onPending: function (result) {
                console.log(result);
            },
            onError: function (result) {
                console.log(result);
            },
            onClose: function () {
                console.log("Payment popup closed");
            }
        });
    };

    const hasPayments = booking.payments && booking.payments.length > 0;
    const hasPendingPayments = booking.payments.some(payment => payment.status === 'pending');


    return (
        <>
            <Link
                className="border border-gray-300 rounded px-4 py-2 mb-5 inline-block"
                href={route("bookings.index")}
            >
                Kembali
            </Link>

            <BookingCreatePayment
                openPaymentBookingDialog={openPaymentBookingDialog}
                setOpenPaymentBookingDialog={setOpenPaymentBookingDialog}
                booking={booking}
                remaining_payment={remaining_payment}
            />

            <Head title={`${booking.invoice} - Booking Details`} />

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">BOOKING #{booking.invoice}</CardTitle>
                    <CardDescription className="text-sm">Informasi detail terkait pemesanan {booking.package.name}</CardDescription>
                </CardHeader>

                <CardContent className="border-t p-0">
                    {booking && (
                        <div className="mb-5 mt-5 px-10">
                            <h2 className="mb-4 text-lg font-semibold">Detail Paket</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Nama Pemesan", value: booking.user.name },
                                    { label: "Email", value: booking.user.email },
                                    { label: "Nomor Telpon", value: booking.user.phone },
                                    { label: "Nama Paket", value: booking.package.name },
                                    { label: "Kategori", value: booking.package.category?.name },
                                    { label: "Harga", value: formatRupiah(booking.package.price) },
                                    { label: "Invoice", value: booking.invoice },
                                    { label: "Jumlah Peserta", value: booking.qty },
                                    { label: "Sisa Pembayaran", value: formatRupiah(parseInt(remaining_payment)) },
                                    { label: "Total", value: formatRupiah(parseInt(booking.amount)) },
                                    { label: "Status Booking", value: booking.status },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <p className="text-sm">{item.label}</p>
                                        <p className="font-semibold">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 p-5">
                        {hasPayments ? (
                            booking.payments.map((payment) => (
                                <Card className="bg-gray-200" key={payment.id}>
                                    <CardHeader>
                                        <CardTitle className="text-lg font-bold">Pembayaran {payment.amount ? formatRupiah(payment.amount) : "-"}</CardTitle>
                                        <CardDescription>{payment.created_at ? formatDateTime(payment.created_at) : "-"}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-2">
                                            <p className="font-semibold">{payment.id}</p>
                                            <p>Metode: {payment.method}, {payment.type}</p>
                                            <p>Jumlah: {payment.amount ? formatRupiah(payment.amount) : "-"}</p>
                                            <p>Status: {payment.status}</p>
                                        </div>
                                        {payment.status === 'pending' && payment.snap_token && (
                                            <Button onClick={() => handlePayment(payment.snap_token)} className="mt-2">
                                                Bayar Sekarang
                                            </Button>
                                        )}
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                    {remaining_payment > 0 && !hasPendingPayments && (
                        <div className="p-5 text-center">
                            <Card className="bg-gray-200">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold"></CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Button
                                        variant="default"
                                        className="mb-2 ml-2 text-sm"
                                        onClick={() => setOpenPaymentBookingDialog(true)}
                                    >
                                        {hasPayments ? 'Lunasi Sisa Pembayaran' : 'Buat Pembayaran'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                </CardContent>
            </Card>
        </>
    );
}

BookingShow.layout = (page) => <Layout children={page} />;
