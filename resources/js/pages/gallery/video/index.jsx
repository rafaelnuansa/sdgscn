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
import { Video } from "@/components/video";
export default function GalleryVideoIndex() {
    const { videos } = usePage().props;
    return (
        <>
            <Head title="Galleries" />
            <Container>
                <div className="py-20">
                    <Card className="border-0 shdow-none">
                        <CardHeader>
                            <CardTitle>Videos</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {videos.data.map((video) => (
                                    <Link
                                        key={video.id}
                                        href={route("galleries.videos.show", video.slug)}
                                        className="relative overflow-hidden rounded-lg shadow-md"
                                    >
                                        <Video
                                            src={`/storage/videos/${video.video}`}
                                            alt={video.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
                                            <p className="text-lg font-semibold text-white">
                                                {video.name}
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

GalleryVideoIndex.layout = (page) => <AppLayout children={page} />;
