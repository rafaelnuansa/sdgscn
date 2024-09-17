import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AdminLayout } from "@/layouts/admin-layout";
import { IconArrowLeft, IconCheck, IconClock, IconX, IconClockFill, IconCircleCheckFill, IconPencilBox, IconDotsVertical } from "@irsyadadl/paranoid";
import { formatRupiah, formatDateTime } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { capitalize } from "lodash";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertAction } from "@/components/alert-action";

const statusOptions = [
  { status: "success", icon: IconCheck, label: "Success", confirmMessage: "Apakah yakin mengubah status menjadi Success?" },
  { status: "pending", icon: IconClock, label: "Pending", confirmMessage: "Apakah yakin mengubah status menjadi Pending?" },
  { status: "failed", icon: IconX, label: "Failed", confirmMessage: "Apakah yakin mengubah status menjadi Failed?" },
  { status: "expired", icon: IconClockFill, label: "Expired", confirmMessage: "Apakah yakin mengubah status menjadi Expired?" },
  { status: "cancel", icon: IconX, label: "Cancel", confirmMessage: "Apakah yakin mengubah status menjadi Cancel?" },
];

const handleStatusChange = (paymentId, status) => {
  router.post(
    route("admin.payments.status", { payment: paymentId, status }),
    { preserveScroll: true }
  );
};

export default function Show() {
  const { auth, booking } = usePage().props;

  return (
    <AdminLayout>
      <Head title={`${booking.invoice} ${booking.package.name}`} />
      <Link href={route("admin.bookings.index")} className={`${buttonVariants({ variant: "outline" })} mb-3`}>
        <IconArrowLeft className="mr-2 h-5 w-5" /> Back to Booking List
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">#{booking.invoice}</CardTitle>
          <CardDescription className="text-sm">Informasi detail terkait pemesanan {booking.package.name}</CardDescription>
        </CardHeader>
        <CardContent className="border-t p-0">
          <div>
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
                    { label: "Terbayar", value: formatRupiah(parseInt(booking.amount)) },
                    { label: "Sisa Pembayaran", value: formatRupiah(parseInt(booking.amount)) },
                    { label: "Total", value: formatRupiah(parseInt(booking.amount)) },
                    { label: "Status Booking", value: booking.status },
                    { label: "Status Booking", value: (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">{capitalize(booking.status)} <IconPencilBox className="ml-2 size-3" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuLabel>Change status</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {auth.user.is_admin && (
                            <>
                              {[
                                { status: "pending", label: "Pending", icon: IconClock, confirmMessage: "Apakah yakin mengubah status menjadi Pending?" },
                                { status: "canceled", label: "Canceled", icon: IconX, confirmMessage: "Apakah yakin mengubah status menjadi Canceled?" },
                                { status: "completed", label: "Completed", icon: IconCircleCheckFill, confirmMessage: "Apakah yakin mengubah status menjadi Completed?" },
                              ].map(option => (
                                <DropdownMenuGroup key={option.status}>
                                  <AlertAction
                                    trigger={<DropdownMenuItem onSelect={(e) => e.preventDefault()}><option.icon className="mr-2 w-3" /> {option.label}</DropdownMenuItem>}
                                    title={booking.invoice}
                                    description={option.confirmMessage}
                                    action={() => router.post(route("admin.bookings.status", { booking: booking.id, status: option.status }), { preserveScroll: false })}
                                  />
                                </DropdownMenuGroup>
                              ))}
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )},
                  ].map((item, index) => (
                    <div key={index}>
                      <p className="text-sm">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <Table size="sm">
              <TableHeader>
                <TableRow>
                  <TableHead>ID Transaksi</TableHead>
                  <TableHead>Metode</TableHead>
                  <TableHead>Virtual Account</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Berlaku sampai</TableHead>
                  <TableHead>Waktu</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {booking.payments && booking.payments.length > 0 ? (
                  booking.payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.id}</TableCell>
                      <TableCell>{payment.method?.toUpperCase() || "-"}</TableCell>
                      <TableCell>{payment.va_number || "-"}</TableCell>
                      <TableCell>{payment.amount ? formatRupiah(payment.amount) : "-"}</TableCell>
                      <TableCell>{capitalize(payment.status || "-")}</TableCell>
                      <TableCell>{payment.expiry_time ? formatDateTime(payment.expiry_time) : "-"}</TableCell>
                      <TableCell>{payment.created_at ? formatDateTime(payment.created_at) : "-"}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <IconDotsVertical className="ml-2 size-3" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Change status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {statusOptions.map((option) => (
                              <DropdownMenuGroup key={option.status}>
                                <AlertAction
                                  trigger={<DropdownMenuItem onSelect={(e) => e.preventDefault()}><option.icon className="mr-2 w-3" /> {option.label}</DropdownMenuItem>}
                                  title={payment.id}
                                  description={option.confirmMessage}
                                  action={() => handleStatusChange(payment.id, option.status)}
                                />
                              </DropdownMenuGroup>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="8" className="text-center">Belum ada pembayaran</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
