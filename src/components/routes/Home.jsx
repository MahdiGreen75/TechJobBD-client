import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="">
            <div className="sm:w-full sm:px-2 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen sm:w-full sm:px-2 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;