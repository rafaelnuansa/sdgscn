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
  const { package: pkg } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    day: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("admin.packages.itineraries.store", pkg.id));
  };

  return (
    <AdminLayout>
      <Head title="Create Itinerary" />

      <Link
        className={buttonVariants({ variant: "outline" }) + " mb-2"}
        href={route("admin.packages.itineraries.index", pkg.id)}
      >
        <IconArrowLeft className="mr-2 size-4" /> Back
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Create Itinerary</CardTitle>
          <CardDescription>Create Itinerary for {pkg.name}</CardDescription>
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
              <label htmlFor="description">Description</label>
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
