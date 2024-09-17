import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Head, Link, usePage } from "@inertiajs/react";
import { Container } from "@/components/container";
import { Layout } from "@/layouts/users/layout";
import { IconCheck, IconClock } from "@irsyadadl/paranoid";

export default function Dashboard() {
  const {
    user,
    booking_pending,
    booking_completed,
    payment_pending,
    payment_success,
  } = usePage().props;
  return (
    <>
      <Head title="Dashboard" />
      <div className="grid flex-1 items-start gap-4 md:gap-8 ">

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Booking
              </CardTitle>
              <IconClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{booking_pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Booking Berhasil
              </CardTitle>
              <IconCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{booking_completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Menunggu Pembayaran
              </CardTitle>
              <IconClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payment_pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pembayaran Berhasil
              </CardTitle>
              <IconCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payment_success}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = (page) => <Layout children={page} />;
