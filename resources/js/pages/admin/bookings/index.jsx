import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/layouts/admin-layout';
import { formatDateTime, formatRupiah } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IconCirclePlusFill, IconDotsVertical, IconDownload } from '@irsyadadl/paranoid';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlertAction } from '@/components/alert-action';


export default function BookingIndex({ auth, ...props }) {

  const { data: bookings, meta, links } = props.bookings;
  const [params, setParams] = useState({ search: '', status: '', start_date: '', end_date: '' });


  useFilter({
    route: route('admin.bookings.index'),
    values: params,
    only: ['bookings'],
  });

  const handleDateChange = (e) => {
    setParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <AdminLayout>
      <Head title='Bookings'></Head>
      <Card>

          <CardHeader className="border-b">
            <CardTitle>Bookings</CardTitle>
            <CardDescription>Manage all bookings</CardDescription>
          </CardHeader>
        <CardContent className="p-0">
        <div className="flex p-5 flex-col gap-3 lg:flex-row">
            <div className='flex'>

            <Input
              value={params?.search}
              className="min-w-[300px] w-full"
              onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
              placeholder="Search..."
            />
            </div>
            <div className='flex gap-3'>

            <Input
                type="date"
                name="start_date"
                value={params.start_date}
                onChange={handleDateChange}
                placeholder="Start Date"
              />
              <Input
                type="date"
                name="end_date"
                value={params.end_date}
                onChange={handleDateChange}
                placeholder="End Date"
              />
            </div>
            <div className="flex gap-3">
              <Select value={params?.status} onValueChange={(e) => setParams({ ...params, status: e })}>
                <SelectTrigger className="md:w-40">
                  <SelectValue placeholder={params?.status ? params.status : 'Status '} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem>All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button asChild>
                {/* <Link href={route('admin.packages.create')}>
                  <IconCirclePlusFill className="mr-2 size-4" />
                  New
                </Link> */}
              </Button>

              <Button asChild>
                <Link href={route('admin.packages.create')}>
                  <IconDownload className="mr-2 size-4" />
                  Excel
                </Link>
              </Button>
          </div>
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">Invoice</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Peserta</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Terbayar</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <React.Fragment key={booking.id}>
                  <TableRow>
                    <TableCell>{booking.invoice}</TableCell>
                    <TableCell>{booking.user.name}</TableCell>
                    <TableCell>{booking.package.name}</TableCell>
                    <TableCell>{booking.status} </TableCell>
                    <TableCell>{booking.qty}</TableCell>
                    <TableCell>{formatRupiah(booking.amount)}</TableCell>
                    <TableCell>{formatRupiah(booking.paid_payment)}</TableCell>
                    <TableCell>{formatDateTime(booking.created_at)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button variant="outline" size="icon"> <IconDotsVertical className="size-3" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {auth.user.is_admin && (

                            <>
                              <DropdownMenuItem asChild>
                                <Link href={route('admin.bookings.show', booking.invoice)}>Show</Link>
                              </DropdownMenuItem>
                              <DropdownMenuGroup>

                                <AlertAction
                                  trigger={
                                    <DropdownMenuItem
                                      onSelect={(e) => e.preventDefault()}
                                    >
                                      Delete
                                    </DropdownMenuItem>
                                  }
                                  title={booking.invoice}
                                  description="Apakah anda yakin ingin menghapus?"
                                  action={() =>
                                    router.delete(
                                      route('admin.bookings.destroy', [booking]),
                                      { preserveScroll: true },
                                    )
                                  }
                                />
                              </DropdownMenuGroup>

                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>

                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>

        </CardContent>
        <CardFooter className="justify-between  pt-6 text-sm text-muted-foreground">
          <span>
            Showing {meta.from} of {meta.total}
          </span>
          {meta.has_pages && (
            <div className="flex items-center gap-x-1">
              <Button asChild size="sm" variant="outline">
                {links.prev ? (
                  <Link href={links.prev}>
                    <IconChevronLeft className="-ml-1 mr-1 size-4" />
                    Prev
                  </Link>
                ) : (
                  <span>Prev</span>
                )}
              </Button>
              <Button asChild size="sm" variant="outline">
                {links.next ? (
                  <Link href={links.next}>
                    Next
                    <IconChevronRight className="-mr-1 ml-1 size-4" />
                  </Link>
                ) : (
                  <span>Next</span>
                )}
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </AdminLayout>
  );
}
