import React from "react";
import { formatRupiah, formatDateTime } from "@/lib/utils";
import { Head, Link } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconArrowLeft } from "@irsyadadl/paranoid";
import { Layout } from "@/layouts/users/layout";

export default function PaymentShow({ payment }) {
  const handlePayment = () => {
    window.snap.pay(payment.snap_token, {
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

  return (
    <div>
      <Head title={`Detail Pembayaran - ${payment.id}`} />
      <div className="mx-auto">
        <Link
          className={buttonVariants({ variant: "outline" }) + " mb-5"}
          href={route("bookings.show", payment.booking.invoice)}
        >
          <IconArrowLeft className="mr-2 w-4" /> Kembali
        </Link>
        <div className="larhy3 mb-6 flex flex-col space-y-1.5 border-b-0 bg-transparent p-0">
          <h3 className="text-xl font-semibold leading-none tracking-tight">
            Detail Invoice
          </h3>
          <p className="text-sm text-muted-foreground">
            Lihat dan download invoice yang telah berhasil diselesaikan.
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">ID Transaksi</TableCell>
                  <TableCell>{payment.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Metode Pembayaran
                  </TableCell>
                  <TableCell>{payment.method.toUpperCase()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Status Pembayaran
                  </TableCell>
                  <TableCell>{payment.status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Total Pembayaran
                  </TableCell>
                  <TableCell>{formatRupiah(payment.amount)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Pesanan</TableCell>
                  <TableCell>{payment.booking.package.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Waktu Pembayaran
                  </TableCell>
                  <TableCell>{formatDateTime(payment.created_at)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mt-5">
          <CardContent className="p-0">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Pesanan</TableCell>
                  <TableCell>{payment.booking.package.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Jumlah Peserta
                  </TableCell>
                  <TableCell>
                    {payment.booking.qty} x{" "}
                    {formatRupiah(payment.booking.price)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Invoice Pesanan
                  </TableCell>
                  <TableCell>{payment.booking.invoice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Total Pesanan</TableCell>
                  <TableCell>{formatRupiah(payment.booking.amount)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Button onClick={handlePayment} className="mt-5">
          Bayar Sekarang
        </Button>
      </div>
    </div>
  );
}

PaymentShow.layout = (page) => <Layout title={"Transaksi"} children={page} />;
