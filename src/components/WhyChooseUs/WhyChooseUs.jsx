import { BiLogoAdobe } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';



const WhyChooseUs = () => {
    return (
        <div className="flex flex-col justify-center sm:flex-row sm:justify-between items-center my-5 ">
            <div className="text-center my-5">
                <div className="font-bold text-4xl md:text-6xl text-slate-700 flex flex-col items-start gap-4">
                    <span>
                        Why Choose
                    </span>
                    <div className='flex items-center gap-1'>
                        <span><BiLogoAdobe className='text-red-600 text-4xl'></BiLogoAdobe></span>
                        <span className="text-3xl font-bold">AlphaMotors</span>
                        <BiRightArrowAlt></BiRightArrowAlt>
                    </div>
                </div>
            </div>
            <div className="p-5 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] text-shadow">

                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 10,
                        shadowScale: 0.54,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination, Autoplay]}
                    className="mySwiper swiper-conflict"
                >
                    <SwiperSlide className="relative">
                        <img src="https://i.ibb.co/9YbR5LF/imgX-1.jpg" className="brightness-50"/>
                        <p className="absolute text-white font-semibold text-sm sm:text-base md:text-lg p-5"> 
                        At Alphamotors, we are committed to staying at the forefront of automotive technology. Our vehicles are equipped with cutting-edge features, ensuring you get the latest in safety, convenience, and performance.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/zbhyVSn/imgX-2.jpg" className="brightness-50"/>
                        <p className="absolute text-white font-semibold text-sm sm:text-base md:text-lg p-5"> 
                        We pride ourselves on building cars that stand the test of time. Alphamotors vehicles are known for their durability and long-lasting quality, providing you with peace of mind on the road.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qBF5J0F/imgX-2.jpg" className="brightness-50"/>
                        <p className="absolute text-white font-semibold text-sm sm:text-base md:text-lg p-5"> 
                        We are dedicated to reducing our environmental footprint. Alphamotors offers eco-friendly options, including electric and hybrid models, to help protect our planet without compromising performance.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/7tpFxBn/imgX-1.jpg" className="brightness-50"/>
                        <p className="absolute text-white font-semibold text-sm sm:text-base md:text-lg p-5"> 
                        We value our customers. From a responsive customer support team to an extensive network of service centers, Alphamotors is dedicated to ensuring your ownership experience is as smooth as possible.
                        </p>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default WhyChooseUs;