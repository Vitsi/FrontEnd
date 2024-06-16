import { useState } from "react";
import Navbar from "../../../components/common/navbar"
import SearchBar from "../../../components/common/searchBar"
import PatientsTab from "./patientsTab";
import DoctorLabTestRequest from "./doctorLabTestRequest";
import DoctorLabTestResult from "./doctorLabTestResult";
import DoctorLayout from "../notifications/layoutDoctor";

const DoctorHome : React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('PatientsTab');

    const renderContent = () => {
        switch (selectedTab) {
        case 'LabRequests':
            return <DoctorLabTestRequest />;
        case 'LabResults':
            return <DoctorLabTestResult />;
        case 'PatientsTab':
            return <PatientsTab/>;
        default:
            return null;
        }
    };

    return (
    < section className='manage-staff'>
      <Navbar isLoggedIn={true} />
      <DoctorLayout>       
      <SearchBar />
      <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-2">
          <div id="top-pagination" className="flex flex-row gap-10">
            <button
              className={`text-lg font-bold ${selectedTab === 'PatientsTab' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('PatientsTab')}
            >
              Patients
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'LabRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabRequests')}
            >
              Lab Test Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'LabResults' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabResults')}
            >
              Lab Test Results
            </button>
        </div>
        </div>
      </div>
       {/* <div className="p-5 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> 
          <div className="flex justify-start text-ellipsis overflow-hidden"> */}
          {renderContent()}
          {/* </div>
       </div>
      </div>  */}
      </DoctorLayout> 
    </section>
    );
}

export default DoctorHome