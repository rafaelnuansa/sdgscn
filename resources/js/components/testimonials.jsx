import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

export default function Testimonials({ testimonials }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        emblaCarouselAutoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <div className="rounded-lg bg-background p-6 shadow-md mb-5 dark:bg-background">
            <div className="mb-2 flex items-center">
                <div className="mr-3">
                  {testimonial.image && (
                    <>
                      <Avatar>
                        <div className="aspect-w-4 aspect-h-4">
                          <AvatarImage
                            src={`/storage/testimonials/${testimonial.image}`}
                            alt={`Testimonial by ${testimonial.name}`}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </div>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </>
                  )}
                </div>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  {testimonial.from && (
                    <p className="text-sm text-gray-600 dark:text-foreground">
                    {testimonial.from}
                    </p>
                  )}
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-700 dark:text-white line-clamp-3">{testimonial.description}</p>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
