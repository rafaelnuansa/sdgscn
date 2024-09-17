import * as React from "react";
import { Image } from "./image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./custom/carousel";

export default function PartnerLogos({ partners }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Image
                src={`/storage/partners/${partner.image}`}
                alt={partner.name}
                className={'w-40'}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
