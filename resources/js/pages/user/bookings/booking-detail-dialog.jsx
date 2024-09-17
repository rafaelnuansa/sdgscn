import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDateTime, formatRupiah } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, usePage } from "@inertiajs/react";
import {
  IconBrandWhatsapp,
  IconCreditCard,
  IconInvoice,
  IconMoneybag,
} from "@irsyadadl/paranoid";
import BookingCreatePayment from "./booking-create-payment";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { capitalize } from "lodash";
import { Label } from "@/components/ui/label";

export default function BookingDetailDialog({
  booking,
  openBookingDialog,
  setOpenBookingDialog,
}) {
  const { web_setting } = usePage().props;
  const [openPaymentBookingDialog, setOpenPaymentBookingDialog] =
    useState(false); // State untuk mengontrol visibilitas dialog BookingCreatePayment
  const isLunas = booking.remaining_payment === 0;
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const formattedPhoneNumber = web_setting.website_phone_whatsapp?.replace(
      /\+/g,
      ""
    );
    setPhoneNumber(formattedPhoneNumber);
  }, [web_setting.website_phone_whatsapp]);

  const handlerOpenBookingPaymentDialog = () => {
    setOpenBookingDialog(false);
    setOpenPaymentBookingDialog(true);
  };

  return (
    <>
      <Dialog open={openBookingDialog} onOpenChange={setOpenBookingDialog}>
        <DialogContent className="p-0">
          <DialogHeader className={"p-5"}>
            <DialogTitle>Detail Transaksi</DialogTitle>
            <DialogDescription>{booking.invoice}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[500px] w-full rounded-md border-t">
            <div>
              {booking ? (
                <div className="p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <Label>Nama Paket</Label>
                      <p className="font-bold">{booking.package.name}</p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Kategori</Label>
                      <p className="font-bold">
                        {booking.package.category?.name}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Harga</Label>
                      <p className="font-bold">
                        {formatRupiah(booking.package.price)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Invoice</Label>
                      <p className="font-bold">{booking.invoice}</p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Jumlah Peserta</Label>
                      <p className="font-bold">{booking.qty}</p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Total</Label>
                      <p className="font-bold">
                        {formatRupiah(parseInt(booking.amount))}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Sisa Pembayaran</Label>
                      <p className="font-bold">
                        {formatRupiah(parseInt(booking.remaining_payment))}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {booking.payments.map((payment, index) => (
                <div className="border-t p-6" key={index}>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <Label>Metode Pembayaran</Label>
                      <p className="font-bold">
                       {payment.method}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Jumlah Pembayaran</Label>
                      <p className="font-bold">
                        {formatRupiah(payment.amount)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Label>Status Pembayaran</Label>
                      <p className="font-bold">{capitalize(payment.status)}</p>
                    </div>
                  
                    <div className="flex justify-between">
                      <Label>ID Pembayaran</Label>
                      <p className="font-bold">{payment.id}</p>
                    </div>

                   
                  </div>
                </div>
              ))}

              <div className="text-center">
                {isLunas == false && (

                  <div className="border-t p-8 text-center">
                    <Button
                      variant="default"
                      className="mb-2 inline-flex w-full items-center text-sm "
                      onClick={handlerOpenBookingPaymentDialog}
                  
                    >
                     Buat Pembayaran
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      <BookingCreatePayment
        openPaymentBookingDialog={openPaymentBookingDialog}
        setOpenPaymentBookingDialog={setOpenPaymentBookingDialog}
        booking={booking}
      />
    </>
  );
}
