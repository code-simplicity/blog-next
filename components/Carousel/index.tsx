import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@mantine/core';
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
                <SwiperSlide className="md:w-full overflow-clip" key={item.id}>
                  <Image alt={item.title} src={item.imageUrl} height={680} />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Carousel;
