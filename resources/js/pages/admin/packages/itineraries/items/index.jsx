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
  IconPencilBox,
  IconTrash,
} from "@irsyadadl/paranoid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Index() {
  const { items, itinerary, package: pkg } = usePage().props;

  const handleDelete = (itemId) => {
    router.delete(
      route("admin.packages.itineraries.items.destroy", {
        package: pkg.id,
        itinerary: itinerary.id,
        item: itemId,
      }),
      {
        preserveScroll: true,
      }
    );
  };

  return (
    <AdminLayout>
      <Head title={`Items for Itinerary Day ${itinerary.day}`} />
      <Link
        className={buttonVariants({ variant: "outline" }) + " mb-2"}
        href={route("admin.packages.itineraries.index" , {package: pkg.id})}
      >
        <IconArrowLeft className="mr-2 size-4" /> Back to Itineraries
      </Link>
      <Card>
      <CardHeader className="border-b">
            <CardTitle className='mb-2'>Items for Itinerary Day {itinerary.day}</CardTitle>
            <CardDescription>
              <Button asChild>
                <Link
                  href={route("admin.packages.itineraries.items.create", {
                    package: pkg.id,
                    itinerary: itinerary.id,
                  })}
                >
                  Add Item
                </Link>
              </Button>
            </CardDescription>
          </CardHeader>

        <CardContent className='p-0'>
       
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.data.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.description}</TableCell>
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
                              "admin.packages.itineraries.items.edit",
                              {
                                package: pkg.id,
                                itinerary: itinerary.id,
                                item: item.id,
                              }
                            )}
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
                            title="Delete Item"
                            description="Are you sure you want to delete this item?"
                            action={() => handleDelete(item.id)}
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
