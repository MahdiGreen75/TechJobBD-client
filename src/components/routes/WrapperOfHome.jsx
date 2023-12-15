import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OnSite from '../Tabs/OnSite/OnSite';
import Remote from '../Tabs/Remote/Remote';
import Hybrid from '../Tabs/Hybrid/Hybrid';
import PartTime from '../Tabs/PartTime/PartTime';
import './stylesBanner.css'
import Testimonial from '../Testimonial/Testimonial';
import FAQs from '../FAQs/FAQs';
const WrapperOfHome = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#00B4DB] to-[#0083B0] flex flex-col items-center justify-center text-white p-12 border-blue-800 rounded-xl shadow-xl text-center text-shadow space-y-5'>
                <h1 className='text-3xl font-bold'>TechJobBd, Connecting Top Tech Professionals</h1>
                <p className='text-sm font-semibold w-full lg:w-96 md:w-80 sm:w-full mx-auto'>Unlock the potential of your tech career with TechTalent Hub! Discover a world of limitless opportunities as we bridge the gap between top-notch tech talent and cutting-edge job postings.</p>
                <div className="w-full flex justify-center items-center my-5">
                    <span className='italic font-extrabold px-2 border-t-4 border-b-4 border-red-700'>Check out our new features</span>
                </div>
            </div>
            <h1 className='text-xl font-bold text-center my-1'>Job Category</h1>
            <Tabs className={"text-xs font-bold"}>
                <TabList>
                    <Tab>On Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                </TabList>

                <TabPanel>
                    <OnSite></OnSite>
                </TabPanel>
                <TabPanel>
                    <Remote></Remote>
                </TabPanel>
                <TabPanel>
                    <Hybrid></Hybrid>
                </TabPanel>
                <TabPanel>
                    <PartTime></PartTime>
                </TabPanel>
            </Tabs>
            <Testimonial></Testimonial>
            <FAQs></FAQs>
        </>
    );
};

export default WrapperOfHome;