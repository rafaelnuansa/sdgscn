import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { AdminLayout } from "@/layouts/admin-layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IconArrowLeft } from "@irsyadadl/paranoid";

export default function Create() {
  const { package: pkg, itinerary } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(
      route("admin.packages.itineraries.items.store", {
        package: pkg.id,
        itinerary: itinerary.id,
      }),
      data
    ); // Mengirimkan data form bersama permintaan POST
  };

  return (
    <AdminLayout>
      <Head title="Create Item" />
      <Link
        className={buttonVariants({ variant: "outline" }) + " mb-2"}
        href={route("admin.packages.itineraries.index", {
          package: pkg.id,
          itinerary: itinerary.id,
        })}
      >
        <IconArrowLeft className="mr-2 size-4" /> Back to Itineraries
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Create Item</CardTitle>
          <CardDescription>
            Create a new item for Itinerary Day {itinerary.day}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && (
                <div className="mt-1 text-red-500">{errors.description}</div>
              )}
            </div>
            <Button type="submit" disabled={processing} className="w-full">
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
