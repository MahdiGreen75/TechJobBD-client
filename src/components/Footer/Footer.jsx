import { BsFacebook } from "react-icons/bs"
import { RiTwitterXLine } from "react-icons/ri"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BiLogoAdobe } from "react-icons/bi"

const Footer = () => {
    return (
        <div className='bg-slate-100 py-5'>
            <div>
                <ul className="flex justify-evenly my-5 text-xs sm:text-sm md:text-base font-bold px-1">
                    <li>ABOUT US</li>
                    <li>PRODUCTS</li>
                    <li>AWARDS</li>
                    <li>HELP</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="border bg-gray-600 mb-5"></div>
            <div className="max-w-4xl mx-auto text-center px-1 font-medium">
                AlphaMotor vehicles are known for their retro styling and innovative features. The Ace, for example, is a subcompact coupe with a sleek design and a range of up to 300 miles.
            </div>
            <div className="flex items-center gap-2 justify-center my-5">
                <BsFacebook className="text-blue-500 text-2xl"></BsFacebook>
                <RiTwitterXLine className="text-2xl"></RiTwitterXLine>
                <FaInstagramSquare className="text-2xl text-pink-600"></FaInstagramSquare>
                <FaLinkedin className="text-2xl text-blue-500"></FaLinkedin>
            </div>
            <div className="border bg-gray-600 mb-5"></div>
            <div className="flex justify-center items-center gap-1">
                <span className="text-xs font-bold">
                    Copyright © 2023
                </span>
                <div className='flex items-center gap-1'>
                    <span><BiLogoAdobe className='text-red-600 text-2xl'></BiLogoAdobe></span>
                    <span className="text-xs ml-1 font-bold">AlphaMotors</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;