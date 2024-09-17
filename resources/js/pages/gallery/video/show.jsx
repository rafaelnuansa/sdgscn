import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import { Container } from "@/components/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AppLayout } from "@/layouts/app-layout";
import { Video } from "@/components/video";

export default function GalleryShow() {
  const { video } = usePage().props;

  return (
    <>
      <Head title={video?.title} />
      <Container>
        <div className="py-20">
          <Card className="border-0">
            <CardHeader>
              <CardTitle>{video?.title}</CardTitle>
            </CardHeader>
            <CardContent>

              <Video
                src={`/storage/videos/${video.video}`}
                alt={video.title}
                className={'w-full rounded-lg	'}
              />
            </CardContent>
          </Card>
        </div>
      </Container>

    </>
  );
}

GalleryShow.layout = (page) => <AppLayout children={page} />;
