import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Carousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="md:w-full md:h-full">
          <Image
            className="w-full md:h-80 object-contain overflow-hidden"
            alt="Random unsplash image"
            src="https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="md:w-full">
          <Image
            fit="cover"
            className="w-full md:h-80 object-contain"
            alt="Random unsplash image"
            src="https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
