import { Image } from '@/components/image'
import { IconStar } from '@irsyadadl/paranoid'
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"
export default function HotelsSection({ paket }) {
    return (

        <>
            <div className="bg-gray-200 dark:bg-gray-900">
                <div className="py-6 container">
                    <div className="accommodation">
                        {paket.hotels.map((hotel, index) => (
                            <div key={hotel.id} className={`card mb-4 p-4 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="w-full md:w-1/3 mb-4 md:mb-0">

                                    <Carousel className="w-full" plugins={[
                                     
                                    ]}>

                                        <CarouselContent>
                                            <CarouselItem>
                                                <Image
                                                    src={`/images/${hotel.image}`}
                                                    alt={hotel.image}

                                                    className="h-80 w-full shadow-lg rounded-md object-cover"
                                                    objectFit="cover" />
                                            </CarouselItem>
                                            {hotel.images.map((image, index) => (
                                                <CarouselItem key={index}>
                                                    <Image
                                                        src={`/storage/images/${image.image}`}
                                                        alt={image.image}

                                                        className="h-80 w-full shadow-lg rounded-md object-cover"
                                                        objectFit="cover"
                                                    />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                                <div className="w-full bg-card p-5 rounded-lg shadow-lg md:mx-4 md:w-2/3">
                                    <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
                                    <p className="mb-2 text-md font-semibold">{hotel.location}</p>

                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, index) => (
                                            <IconStar key={index} className={index < hotel.stars ? 'fill-current text-yellow-500 w-4 h-4' : 'text-gray-300 w-4 h-4'} />
                                        ))}
                                    </div>
                                    <div className="mb-2 text-md">{hotel.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
