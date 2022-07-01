import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import { getPortalLoop } from '@api/loop';
import { ResponseCode } from '@utils/enums/ResponseCode';

const Carousel = () => {
  const [looperData, setLooperData] = useState([]);
  const asyncInitialData = async () => {
    const params = {
      page: 1,
      size: 10,
    };
    const { result, code } = await getPortalLoop(params);
    if (code === ResponseCode.SUCCESS) {
      setLooperData(result.contents);
    }
  };
  useEffect(() => {
    asyncInitialData();
  }, []);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        scrollbar={{ draggable: true }}
      >
        {looperData && looperData.length
          ? looperData.map((item: any) => {
              return (
                <SwiperSlide key={item.id}>
                  <Box className="h-96">
                    <Image
                      alt={item.title}
                      src={item.imageUrl}
                      className="absolute top-0 left-o right-0 object-cover"
                    />
                  </Box>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Carousel;
