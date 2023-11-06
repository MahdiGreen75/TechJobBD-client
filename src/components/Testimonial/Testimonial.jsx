import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div>
            <div className="text-center my-5">
                <p className="font-semibold text-sm sm:text-base md:text-2xl ">Our Happy Clients</p>
            </div>
            <Marquee pauseOnHover={true}>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/k3xv55S/profile-Img-1.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Shah Rukh Khan</span>
                    <span className="text-base font-semibold">Bollywood Actor</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">Anytime I need any number of cars for filming, I get on time.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/CVTCm35/profile-Img-2.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mrs. Putu Khatun</span>
                    <span className="text-base font-semibold">Masterchef Australia</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">They helpled me gift a perfect car to my ex-boyfriend.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/CsVsN29/profile-Img-3.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mrs. Nargis Doctor</span>
                    <span className="text-base font-semibold">Medicine Specialist</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">They are always ready for give any service.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/PW0Y0ZT/profile-Img-4.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mst. Bou Rani</span>
                    <span className="text-base font-semibold">Housewife</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">The person made this website, I am his wife.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/W0qv9GS/profile-Img-5.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Salman Khan</span>
                    <span className="text-base font-semibold">Bollywood Actor</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">My dream was to collect more car than SRK. This company fulfills it.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/wQZTbqw/profile-Img-6.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Amir Khan</span>
                    <span className="text-base font-semibold">Bollywood Actor</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">They give me a lot of car to make Dhoom 2 with discount.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;