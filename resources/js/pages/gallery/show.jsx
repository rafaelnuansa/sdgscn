import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Container } from "@/components/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AppLayout } from "@/layouts/app-layout";
import { Image } from "@/components/image";

export default function GalleryShow() {
  const { album, galleries } = usePage().props;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  return (
    <>
      <Head title={album?.name} />
      <Container>
        <div className="py-20">
          <Card>
            <CardHeader>
              <CardTitle>{album?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                {galleries.map((gallery) => (
                  <div
                    key={gallery.id}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => openLightbox(gallery.image)}
                    style={{ aspectRatio: "1/1" }}
                  >
                    <Image
                      src={`/storage/albums/${gallery.image}`}
                      alt={gallery.image}
                      className="h-full w-full object-cover absolute inset-0"
                      style={{ objectPosition: "center" }} // Center the image
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
                      <p className="text-white font-bold">Click to View</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeLightbox}>
          <div className="max-w-screen-lg p-4 overflow-auto bg-background">
            <button className="absolute top-0 right-0 m-4 text-2xl font-bold text-gray-700 hover:text-gray-900" onClick={closeLightbox}>&times;</button>
            <Image src={`/storage/albums/${selectedImage}`} alt={selectedImage} className="w-full rounded h-auto max-h-screen" />
          </div>
        </div>
      )}
    </>
  );
}

GalleryShow.layout = (page) => <AppLayout children={page} />;
