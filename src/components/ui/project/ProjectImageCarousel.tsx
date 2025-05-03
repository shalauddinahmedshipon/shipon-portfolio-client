// components/ProjectImageCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProjectImageCarousel({ imageUrls }: { imageUrls: string[] }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {imageUrls.map((url, i) => (
        <SwiperSlide key={i}>
          <img
            src={url}
            alt={`Screenshot ${i + 1}`}
            className="w-full h-64 object-cover rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
