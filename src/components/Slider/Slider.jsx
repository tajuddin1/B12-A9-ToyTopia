
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/image/slider-1.jpg'
import slider2 from '../../assets/image/slider-2.jpg'
import slider3 from '../../assets/image/slider-3.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper modules={[Autoplay ]} autoplay={{ delay: 4000 }} loop={true}>
        <SwiperSlide>
          <div className="">
            <img className='max-h-130 object-cover w-full' src={slider1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className='max-h-130 object-cover w-full' src={slider2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className='max-h-130 object-cover w-full' src={slider3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;