import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Breadcrumb from "@/components/breadcrumb"; // Import komponen breadcrumb
import { AppLayout } from "@/layouts/app-layout";
import { UserLayout } from "@/layouts/user-layout";
import { Container } from "@/components/container";
import Search from "@/shared/search";
import Pagination from "@/shared/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, formatDateTime, formatRupiah } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Image } from "@/components/image";
import { Layout } from "@/layouts/users/layout";
import { capitalize } from "lodash";
import { IconClock, IconInvoice } from "@irsyadadl/paranoid";

export default function PaymentIndex() {
  const { auth, payments } = usePage().props;
  console.log(payments);
  return (
    <>
      <Head title="Transaksi"></Head>
      <div className="mx-auto">
        <div className="md:col-span-12">
          <div className="relative">
            <Search
              placeholder="Cari Transaksi"
              URL={route("payments.index")}
            />
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Transaksi</CardTitle>
                <CardDescription>
                  Berikut data transaksi pembayaran
                </CardDescription>
              </CardHeader>
              <CardContent>
                {payments.data.map((payment, index) => (
                  <div
                    className="flex flex-col mb-5 gap-4 rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
                    key={index}
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-3 flex items-center font-semibold ">
                          <IconInvoice className="mr-2" />
                          {payment.booking?.invoice} : {" "}
                          {payment.booking?.package.name.toUpperCase()}
                        </div>
                        <div className="text-sm font-bold ">
                          {formatRupiah(payment?.amount)} -{" "}
                          {payment.status.toUpperCase()}
                        </div>
                        {payment.method !== "offline" && (
                        <div className="text-sm font-semibold ">
                          <span className="flex items-center gap-1">
                            Bayar sebelum :{" "}
                            {formatDateTime(payment.expiry_time)}
                          </span>
                        </div>
                        
                      )}
                        <div className="text-sm italic">{payment.id}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1  gap-4 md:grid-cols-3">
                        <div className="border-r pr-2">
                          <h2 className="font-medium">Metode Pembayaran</h2>
                          <p className="font-bold ">
                          {}
                          </p>
                        </div>
                      
                      {payment.method !== "offline" && (
                        <div className="border-r pr-2">
                          <h2 className="font-medium">Virtual Account</h2>
                          <p className="font-bold ">
                            {payment.va_number ?? ''}
                          </p>
                        </div>
                      )}
                      <div className="pr-2">
                        <h2 className="font-medium">Total Biaya Booking</h2>
                        <p className="font-bold ">
                          {formatRupiah(payment.booking?.amount)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Link
                        onProgress={true}
                        href={route("payments.show", payment.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Lihat
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Pagination links={payments.links} />
        </div>
      </div>
    </>
  );
}

PaymentIndex.layout = (page) => <Layout title={"Transaksi"} children={page} />;
