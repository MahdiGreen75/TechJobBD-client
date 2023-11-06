
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './stylesBanner.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='h-52 sm:h-[500px] my-5'>
            <div id="app">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper swiper-banner"
                >
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/vBhzdFg/car-2.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into confidance</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>The Audi certified sell event is on.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/rcSN285/car-3.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into the future</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>Future is our legacy.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/vXcSDjd/car-4.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into advanced marketing</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>Best marketing strategy to met your goals</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/TvNDxgS/car-5.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into best deals</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>Reasonable deal to met your dream.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/FX3GvXx/car-6.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into best warrenty service</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>Reliability is our responsibility.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/gV9ZhgY/car-7.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into your dream buisness</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>The best deal at your price.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative '>
                        <img src="https://i.ibb.co/DpZyp1z/car-8.jpg" />
                        <div className='text-white absolute text-shadow'>
                            <p className='text-xl sm:text-5xl font-bold '>Step into love</p>
                            <p className='text-sm sm:text-2xl my-2 font-extralight'>We love our customer.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Banner;
