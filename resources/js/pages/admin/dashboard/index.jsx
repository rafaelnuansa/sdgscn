import {
  Activity,
  Package2,
  Users,
  CreditCard,
} from "lucide-react";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/layouts/admin-layout";
import { DocumentIcon } from "@heroicons/react/20/solid";
import { IconGallery, IconPerson } from "@irsyadadl/paranoid";
import Chart from 'react-apexcharts';

export default function Dashboard({
  usersCount,
  articlesCount,
  sdgsCount,
  pagesCount,
  slidersCount,
  expertsCount,
  publicationsCount,
  researchCount,
  publicationsStats,
  researchStats
}) {
  // Prepare data for the charts
  const publicationDates = publicationsStats.map(stat => stat.date);
  const publicationCounts = publicationsStats.map(stat => stat.count);

  const researchDates = researchStats.map(stat => stat.date);
  const researchCounts = researchStats.map(stat => stat.count);

  const publicationChartOptions = {
    chart: {
      id: 'publication-chart',
    },
    xaxis: {
      categories: publicationDates,
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    title: {
      text: 'Publications Over Time',
      align: 'center',
    },
  };

  const researchChartOptions = {
    chart: {
      id: 'research-chart',
    },
    xaxis: {
      categories: researchDates,
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
    title: {
      text: 'Research Over Time',
      align: 'center',
    },
  };

  return (
    <>
      <Head title="Dashboard" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usersCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <Package2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articlesCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total SDGs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sdgsCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pagesCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sliders</CardTitle>
            <IconGallery className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{slidersCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Experts</CardTitle>
            <IconPerson className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expertsCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Publications</CardTitle>
            <DocumentIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publicationsCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Researches</CardTitle>
            <DocumentIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{researchCount}</div>
          </CardContent>
        </Card>

      </div>

      {/* Charts for Publications and Research */}
      <div className="mt-8">
        <Card>
          <CardContent className="p-10">
            <Chart
              options={publicationChartOptions}
              series={[{ name: 'Publications', data: publicationCounts }]}
              type="line"
              height={350}
            />
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="p-10">
            <Chart
              options={researchChartOptions}
              series={[{ name: 'Research', data: researchCounts }]}
              type="line"
              height={350}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

Dashboard.layout = (page) => <AdminLayout title="Dashboard" children={page} />;
