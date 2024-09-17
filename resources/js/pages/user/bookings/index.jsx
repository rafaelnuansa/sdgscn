import React, { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import Pagination from "@/shared/pagination";
import BookingCard from "./booking-card";
import { IconSearch } from "@irsyadadl/paranoid";
import { Layout } from "@/layouts/users/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFilter } from "@/hooks/useFilter";
import { Label } from "@/components/ui/label";

import { IconCheck, IconClock } from "@irsyadadl/paranoid";

export default function BookingIndex() {
  const { auth, bookings, user,
    booking_pending,
    booking_completed,
    payment_pending,
    payment_success } = usePage().props;
  const [params, setParams] = useState({
    search: "",
    start_date: "",
    end_date: "",
  });


  useFilter({
    route: route("bookings.index"),
    values: params,
    only: ["bookings"],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [id]: value,
    }));
  };

  return (
    <>
      <Head title="Bookings"></Head>

       <Card>
        <CardHeader>
          <CardTitle>Transaksi Saya</CardTitle>
          <CardDescription>Histori Booking saya</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 md:space-y-0 space-y-4">
            <div className="w-full md:w-1/3">
              <Label htmlFor="search" className="mb-1">
                Search
              </Label>
              <Input
                type="text"
                id="search"
                className="form-input rounded-md"
                placeholder="Search..."
                value={params.search}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3">
              <Label htmlFor="start_date" className="mb-1">
                Start Date
              </Label>
              <Input
                type="date"
                id="start_date"
                className="form-input rounded-md"
                value={params.start_date}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3">
              <Label htmlFor="end_date" className="mb-1">
                End Date
              </Label>
              <Input
                type="date"
                id="end_date"
                className="form-input rounded-md"
                value={params.end_date}
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>


      <div className="mx-auto">
        <div className="md:col-span-12">
          <div className="mt-8">
            {bookings.data.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>

          <div className="mt-2">
            <Pagination links={bookings.links} />
          </div>
        </div>
      </div>
    </>
  );
}

BookingIndex.layout = (page) => <Layout title={"Bookings"} children={page} />;
