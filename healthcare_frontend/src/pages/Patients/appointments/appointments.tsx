import React, { useState } from 'react';
import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import PatientRequest from "./patientRequest";
// import PatientHospital from './patinetHospital';
import AssignedHospitalRequests from './patientAssignedRequests';
import Layout from '../notifications/layoutPatients';

const Appointments: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Requests');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Requests':
        return <PatientRequest />;
      case 'History':
        return <AssignedHospitalRequests />;
      // case 'Hospital':
      //   return <PatientHospital/>;
      default:
        return null;
    }
  };

  return (
    < section className=''>
      <Layout>
      <Navbar isLoggedIn={true} />
      <SearchBar />
      <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-2">
          <div id="top-pagination" className="flex flex-row gap-10">
            <button
              className={`text-lg font-bold ${selectedTab === 'Requests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('Requests')}
            >
              Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'History' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('History')}
            >
             Assigned Requests
            </button>
            {/* <button
              className={`text-lg font-bold ${selectedTab === 'Hospital' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('Hospital')}
            >
              Hospital
            </button> */}
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
       </Layout>
    </section>
  );
}

export default Appointments;
