import Marquee from "react-fast-marquee";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div>
            <div className="text-center my-5">
                <p className="font-semibold text-sm sm:text-base md:text-2xl ">Testimonial</p>
            </div>
            <Marquee pauseOnHover={true}>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/k3xv55S/profile-Img-1.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Stuart Lee</span>
                    <span className="text-base font-semibold">Brain Station 23</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">I got a SWE Job in Brain Station 23 from their recommendation.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/CVTCm35/profile-Img-2.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mrs. Shabana Begum</span>
                    <span className="text-base font-semibold">Infosys ltd.</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">FrontWorldSoft offer me with double sallery.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/CsVsN29/profile-Img-3.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mrs. Hasina Akter</span>
                    <span className="text-base font-semibold">Graphics Designer</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">I got a huge Freelance project from their recommendation.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/PW0Y0ZT/profile-Img-4.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mst. Emma Watson</span>
                    <span className="text-base font-semibold">Sr. Software Engineer</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">I got recruited in Google Inc. india by their recommendation.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/W0qv9GS/profile-Img-5.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Sam Altman</span>
                    <span className="text-base font-semibold">Devops Engineer</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">Devops is my dream job. They fulfills it.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center  p-5 border-2 rounded-md drop-shadow-2xl m-5 h-96">
                    <img src="https://i.ibb.co/wQZTbqw/profile-Img-6.jpg" className="w-32 h-32 rounded-full object-cover object-center" />
                    <span className="text-xl font-bold">Mr. Ack Rann</span>
                    <span className="text-base font-semibold">Product Quality Manager</span>
                    <div className="flex justify-start w-full">
                        <FaQuoteLeft></FaQuoteLeft>
                    </div>
                    <span className="w-52 text-center italic">I got a job by their recommendation.</span>
                    <div className="flex justify-end w-full">
                        <FaQuoteRight></FaQuoteRight>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonial;