import React, { useEffect, useState } from "react";
import { formatDateTime, formatRupiah } from "@/lib/utils";
import { Image } from "@/components/image";
import { Link, usePage } from "@inertiajs/react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BookingCard = ({ booking }) => {
  return (
    <Card className="mb-4">
      <div className="mb-4 overflow-hidden rounded-md">
        <div className="flex items-center justify-between border-b p-3">
          <div className="space-x-2">
            <Badge>{booking.package?.category?.name.toUpperCase()}</Badge>
            <span className="text-xs">{formatDateTime(booking.created_at)}</span>
          </div>
        </div>
        <div className="flex flex-col items-start p-4 md:flex-row">
          <div className="mb-4 w-full overflow-hidden border rounded-md md:mb-0 md:mr-4 md:w-40 lg:w-40">
            <Image
              skeletonHeight="24"
              className="h-full w-full object-cover"
              src={`/images/${booking.package.image}`}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-md mb-1 font-semibold">#{booking.invoice} {booking.package.name}</h2>
            <p className="mb-1 text-sm">{booking.qty} x {formatRupiah(booking.package.price)}</p>
            <p className="text-sm">Total: {formatRupiah(parseInt(booking.amount))}</p>
            <p className="text-sm">Sisa Pembayaran: {formatRupiah(parseInt(booking.remaining_payment))}</p>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "default" })}
              href={route("bookings.show", booking.invoice)}
            >
              Detail & Pembayaran
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
