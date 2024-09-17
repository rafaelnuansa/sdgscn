import React from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import { AdminLayout } from "@/layouts/admin-layout";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlertAction } from "@/components/alert-action";
import {
  IconArrowLeft,
  IconDotsVertical,
} from "@irsyadadl/paranoid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Index() {
  const { itineraries, package: pkg } = usePage().props;

  const handleDelete = (itineraryId) => {
    router.delete(
      route("admin.packages.itineraries.destroy", {
        package: pkg.id,
        itinerary: itineraryId,
      }),
      {
        preserveScroll: true,
      }
    );
  };

  return (
    <AdminLayout>
      <Head title={`Itineraries for ${pkg.name}`} />

      <Link
        className={buttonVariants({ variant: "outline" }) + " mb-2"}
        href={route("admin.packages.index")}
      >
        <IconArrowLeft className="mr-2 size-4" /> Back to Packages
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>{pkg.name} Itineraries</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <div className="flex gap-2 px-5 mb-5 ">
          <Link
            className={buttonVariants({ variant: "default" })}
            href={route("admin.packages.itineraries.create", pkg.id)}
          >
            Add Itinerary
          </Link>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Day</TableHead>
                <TableHead>Description</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {itineraries.map((itinerary, index) => (
                <TableRow key={itinerary.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{itinerary.day}</TableCell>
                  <TableCell>{itinerary.description}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IconDotsVertical className="w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            href={route(
                              "admin.packages.itineraries.items.index",
                              {
                                itinerary: itinerary.id,
                                package: pkg.id,
                              }
                            )}
                          >
                            {itinerary.items_count ?? 0} Items
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href={route("admin.packages.itineraries.edit", {
                              package: pkg.id,
                              itinerary: itinerary.id,
                            })}
                          >
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <AlertAction
                            trigger={
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                              >
                                Delete
                              </DropdownMenuItem>
                            }
                            title="Delete Itinerary"
                            description="Are you sure you want to delete this itinerary?"
                            action={() => handleDelete(itinerary.id)}
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
