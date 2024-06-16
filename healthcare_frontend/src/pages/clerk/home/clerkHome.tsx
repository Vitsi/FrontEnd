import { useState } from "react";
import AppointmentRequests from "./appointmentRequests";
import ClerkCalendar from "./requestCalendar";
import ClerkLayout from "../notifications/layoutClerk";

const ClerkHome : React.FC =() => {
    const [selectedTab, setSelectedTab] = useState('AppointmentRequests');

    const renderContent = () => {
        switch (selectedTab) {
        case 'AppointmentRequests':
            return <AppointmentRequests />;
        case 'RequestCalender':
            return <ClerkCalendar onDoctorSelect={function (): void {
              throw new Error("Function not implemented.");
            } } onTimeSlotSelect={function (): void {
              throw new Error("Function not implemented.");
            } }/>;
        default:
            return null;
        }
    };

    return(
        <>
        {/* <Navbar isLoggedIn={true} /> */}
        <ClerkLayout>
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
              className={`text-lg font-bold ${selectedTab === 'RequestCalender' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('RequestCalender')}
            >
              Request Calender
            </button>
            </div>
            </div>
        </div>
           {renderContent()}
           </ClerkLayout>
        </>
    )
}

export default ClerkHome;
