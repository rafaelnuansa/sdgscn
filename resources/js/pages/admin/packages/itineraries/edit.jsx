import React, { useState, useEffect } from "react";
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

export default function Edit() {
  const { package: pkg, itinerary } = usePage().props;
  const { data, setData, put, processing, errors } = useForm({
    day: itinerary.day || "",
    description: itinerary.description || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(
      route("admin.packages.itineraries.update", {
        package: pkg.id,
        itinerary: itinerary.id,
      })
    );
  };

  return (
    <AdminLayout>
      <Head title={`Edit Itinerary for ${pkg.name}`} />

      <Link
        className={buttonVariants({ variant: "outline" }) + " mb-2"}
        href={route("admin.packages.itineraries.index", pkg.id)}
      >
        <IconArrowLeft className="mr-2 size-4" /> Back
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Edit Itinerary</CardTitle>
          <CardDescription>Edit itinerary for {pkg.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="day">Day</Label>
              <Input
                id="day"
                name="day"
                value={data.day}
                onChange={(e) => setData("day", e.target.value)}
                className={errors.day ? "border-red-500" : ""}
              />
              {errors.day && (
                <div className="mt-1 text-red-500">{errors.day}</div>
              )}
            </div>
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
