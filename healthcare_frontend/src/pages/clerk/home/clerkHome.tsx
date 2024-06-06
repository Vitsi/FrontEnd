import { useState } from "react";
import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import ClerkSidebar from "../../../components/sidebar/clerkSidebar";
import AppointmentRequests from "./appointmentRequests";
import LabTestRequests from "./labTestRequests";
import RequestHistory from "./requestHistory";

const ClerkHome : React.FC =() => {
    const [selectedTab, setSelectedTab] = useState('AppointmentRequests');

    const renderContent = () => {
        switch (selectedTab) {
        case 'AppointmentRequests':
            return <AppointmentRequests />;
        case 'LabTestRequests':
            return <LabTestRequests />;
        case 'RequestHistory':
            return <RequestHistory/>;
        default:
            return null;
        }
    };

    return(
        <>
        <Navbar isLoggedIn={true} />
        <ClerkSidebar/>
        <SearchBar/>
        <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-2">
          <div id="top-pagination" className="flex flex-row gap-10">
            <button
              className={`text-lg font-bold ${selectedTab === 'AppointmentRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('AppointmentRequests')}
            >
               AppointmentRequests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'LabTestRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabTestRequests')}
            >
              Lab Test Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'RequestHistory' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('RequestHistory')}
            >
             Request History
            </button>
            </div>
            </div>
        </div>
           {renderContent()}
        </>
    )
}

export default ClerkHome;
