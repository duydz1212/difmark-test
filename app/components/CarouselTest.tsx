"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IoIosArrowForward } from "react-icons/io";
import { CanvasTextImage } from "./Lab";
import PopularGameItem from "./PopularGameItem";

export default function CarouselTest() {
  return (
    <div className="w-full rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <CanvasTextImage
          className="-translate-x-[22px]"
          text="POPULAR SELLERS"
          imageUrl="/text-img.svg"
          size="24px"
        />
        <div className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors">
          <span className="mr-2">View All</span>
          <IoIosArrowForward />
        </div>
      </div>

      {/* Container với fade effect */}
      <div className="relative ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Fade effect sử dụng CSS mask - áp dụng cho CarouselContent */}
          <div
            className="carousel-content-wrapper"
            style={{
              maskImage: `linear-gradient(
                to right,
                transparent 0%,
                black 12%,
                black 88%,
                transparent 100%
              )`,
              WebkitMaskImage: `linear-gradient(
                to right,
                transparent 0%,
                black 8%,
                black 92%,
                transparent 100%
              )`,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-auto">
                <PopularGameItem />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-auto">
                <PopularGameItem />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-auto">
                <PopularGameItem />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-auto">
                <PopularGameItem />
              </CarouselItem>
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
