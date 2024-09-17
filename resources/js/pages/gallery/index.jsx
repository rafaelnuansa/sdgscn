import React, { useState } from "react";
import { Head, Link, usePage, useForm } from "@inertiajs/react";
import { Container } from "@/components/container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppLayout } from "@/layouts/app-layout";
import { Image } from "@/components/image";
export default function GalleryIndex() {
  const { albums } = usePage().props;

  return (
    <>
      <Head title="Galleries" />
      <Container>
        <div className="py-20">
          <Card className="border-0 shdow-none">
            <CardHeader>
              <CardTitle>Albums</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {albums.map((album) => (
                  <Link
                    key={album.id}
                    href={route("galleries.show", album.id)}
                    className="relative overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={`/storage/albums/${album.image}`}
                      alt={album.name}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
                      <p className="text-lg font-semibold text-white">
                        {album.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}

GalleryIndex.layout = (page) => <AppLayout children={page} />;
