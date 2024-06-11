import { useState } from "react";
import Navbar from "../../../components/common/navbar";
import ClerkSidebar from "../../../components/sidebar/clerkSidebar";
import AppointmentRequests from "./appointmentRequests";
import LabTestRequests from "./labTestRequests";
import ClerkCalendar from "./requestCalendar";

const ClerkHome : React.FC =() => {
    const [selectedTab, setSelectedTab] = useState('AppointmentRequests');

    const renderContent = () => {
        switch (selectedTab) {
        case 'AppointmentRequests':
            return <AppointmentRequests />;
        case 'LabTestRequests':
            return <LabTestRequests />;
        case 'RequestCalender':
            return <ClerkCalendar/>;
        default:
            return null;
        }
    };

    return(
        <>
        {/* <Navbar isLoggedIn={true} /> */}
        <ClerkSidebar/>
        <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-10 sm:mt-14 md:mt-24 lg-14">
        <div className="grid gap-4 md:grid-cols-2">
          <div id="top-pagination" className="flex flex-row gap-10">
            <button
              className={`text-lg font-bold ${selectedTab === 'AppointmentRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('AppointmentRequests')}
            >
               Appointment Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'LabTestRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabTestRequests')}
            >
              Lab Test Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'RequestCalender' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('RequestCalender')}
            >
              Request Calender
            </button>
            </div>
            </div>
        </div>
           {renderContent()}
        </>
    )
}

export default ClerkHome;
