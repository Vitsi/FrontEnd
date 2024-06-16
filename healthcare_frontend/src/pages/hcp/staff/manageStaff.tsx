import { useState } from "react";
import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import ManageDoctors from "./manageDoctors";
import ManageClerk from "./manageClrek";
import ManageLabTechs from "./manageLabTechs";
import HcpLayout from "../notifications/layoutHcp";

const ManageStaff: React.FC = () => {
    
    const [selectedTab, setSelectedTab] = useState('ManageDoctors');

    const renderContent = () => {
        switch (selectedTab) {
        case 'ManageDoctors':
            return <ManageDoctors />;
        case 'ManageLabTechs':
            return <ManageLabTechs />;
        case 'ManageClerk':
            return <ManageClerk/>;
        default:
            return null;
        }
    };

    return (
    < section className='manage-staff'>
      <Navbar isLoggedIn={true} />
      <HcpLayout>  
      <SearchBar />
      <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-2">
          <div id="top-pagination" className="flex flex-row gap-10">
            <button
              className={`text-lg font-bold ${selectedTab === 'ManageDoctors' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('ManageDoctors')}
            >
              Doctors
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'ManageLabTechs' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('ManageLabTechs')}
            >
              Laboratory Technician
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'ManageClerk' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('ManageClerk')}
            >
              Clerk
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
      </HcpLayout>  
    </section>
    );
}

export default ManageStaff;
