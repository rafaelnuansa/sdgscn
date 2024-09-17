import React, { useState, useRef, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb';
import { AppLayout } from '@/layouts/app-layout';
import { Image } from '@/components/image';
import { formatRupiah } from '@/lib/utils';
import { Container } from '@/components/container';
import BookingDialog from './booking-dialog';
import { Badge } from '@/components/ui/badge';
import HotelsSection from './hotels';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import 'react-vertical-timeline-component/style.min.css';
import { Timeline, TimelineItem } from './timeline';
import MetaTags from '@/components/meta-tags';
import LoginRegisterDialog from '../dialogs/login-register';
import { Video } from '@/components/video';
import { IconLock } from '@irsyadadl/paranoid';
export default function PackageShow() {
  const { paket, itineraries, videoPremiums, hasBooking, auth } = usePage().props;
  return (
    <>
      <Head title={paket.name} />
      <MetaTags
        title={paket.name}
        description={paket.name}
        url={route('packages.show', [paket.slug])}
        image={paket.image}
      />

      <div className="mt-4">
        <Container>

          <Breadcrumb
            links={[
              { label: 'Home', url: '/' },
              { label: 'Packages', url: '/packages' },
              { label: paket.name, url: route('packages.show', paket.slug) },
            ]}
          />
        </Container>
        <div className="mx-auto container py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            <div className="md:col-span-6 slick-gallery-slideshow detail-gallery">
              <Carousel className="w-full" plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}>

                <CarouselContent>
                  <CarouselItem>
                    <div className="relative overflow-hidden shadow-md w-full border rounded  md:mr-4 mb-4 md:mb-0">

                      <Image
                        src={`/images/${paket.image}`}
                        alt={paket.image}

                        className="aspect-[16/9] w-full shadow-lg border rounded  object-cover"
                        objectFit="cover" />
                    </div>
                  </CarouselItem>
                  {paket.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={`/storage/images/${image.image}`}
                        alt={image.image}

                        className="aspect-[16/9] w-full shadow-lg rounded-md object-cover"
                        objectFit="cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="md:col-span-6">
              <div className=" dark:bg-card min-h-[400px] rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-2 text-binbaz-biru-tua font-roboto-slab">{paket.name}</h2>
                <Badge className="bg-custom-primary-theme text-sm mb-2">{paket.category.name}</Badge>
                <p className="mb-2 text-base">{paket.description}</p>
                <div className="flex flex-wrap ">
                  {paket.hotels.length > 0 ? (
                    paket.hotels.map((hotel, index) => (
                      <div key={hotel.id} className={`w-1/2 pr-4 pb-4 ${index % 2 === 0 ? '' : 'pl-4'}`}>
                        <div>
                          <h2 className="text-md font-semibold">{hotel.name}</h2>
                          <p className="italic text-sm">
                            {hotel.pivot.night} {hotel.pivot.night > 1 ? 'Nights' : 'Night'} at {hotel.location}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                <p className="text-lg font-bold mb-2">{formatRupiah(paket.price)}</p>
                <div className="text-center mt-5">
                  {auth.user ? (
                    <BookingDialog paket={paket} />
                  ) : (
                    <>
                      <LoginRegisterDialog paket={paket} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {paket.hotels?.length > 0 && (
        <HotelsSection paket={paket} />
      )}

      {itineraries.length > 0 && (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-10 mx-auto container">
            <h3 className="text-xl font-bold mb-4">Itineraries</h3>
            <Timeline>
              {itineraries.map((itinerary, index) => (
                <TimelineItem
                  key={`${itinerary.id}_${index}`}
                  day={itinerary.day}
                  description={itinerary.description}
                  items={itinerary.items}
                />
              ))}
            </Timeline>
          </div>
        </section>
      )}


      <section className="bg-white dark:bg-gray-900">
        <div className="py-10 mx-auto container">
          <h3 className="text-xl font-bold mb-4">Premium Konten</h3>
          {videoPremiums.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {videoPremiums.map((video, index) => (
                <div key={index} className="relative overflow-hidden shadow-md w-full border rounded">
                  <div className="relative">
                    <Video
                      src={`/storage/videos/${video.video}`}
                      alt={video.title}
                      className={'w-full rounded-lg'}
                    />
                    {!hasBooking && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <div className="text-center text-white">
                          <p className="font-bold">Pesan paket untuk mengakses konten premium</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              {auth.user ? (
                "No premium videos available."
              ) : (
                "Access to premium content is restricted. Please book the package to view premium videos."
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

PackageShow.layout = (page) => <AppLayout children={page} />;
