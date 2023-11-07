import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OnSite from '../Tabs/OnSite/OnSite';
import Remote from '../Tabs/Remote/Remote';
import Hybrid from '../Tabs/Hybrid/Hybrid';
import PartTime from '../Tabs/PartTime/PartTime';

const WrapperOfHome = () => {
    return (
        <>
            <div>
                <h1>this is home tab.</h1>
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
        </>
    );
};

export default WrapperOfHome;