import { useState } from "react";
import Navbar from "../../../components/common/navbar";
import LabTechRequests from "./labTechRequests";
import LabTechSidebar from "../../../components/sidebar/labTechSidebar";
import SearchBar from "../../../components/common/searchBar";


const LabTechHome : React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('LabTechRequests');
  
  const renderContent = () => {
            switch (selectedTab) {
            case 'LabTechRequests':
                return <LabTechRequests />;
            default:
                return null;
             }
    }; 
  return(<>
  <Navbar isLoggedIn={true}/>
  <SearchBar/>
  <LabTechSidebar/>
  <div className="md:ml-64 sm:ml-64 sm:pl-4 sm:pt-4 lg-14">
        <div className="grid gap-4 md:grid-cols-2">
           <div id="top-pagination" className="flex flex-row gap-10">
             <button
              className={`text-lg font-bold ${selectedTab === 'LabTechRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabTechRequests')}
            >
               LabTest Requests
            </button>
            {/* <button
              className={`text-lg font-bold ${selectedTab === 'LabTestTestRequests' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('LabTestTestRequests')}
            >
              LabTest Test Requests
            </button>
            <button
              className={`text-lg font-bold ${selectedTab === 'RequestCalender' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              onClick={() => setSelectedTab('RequestCalender')}
            >
              Request Calender
            </button> */}
            </div>
            </div>
        </div>
           {renderContent()}
        </>
    )
}

export default LabTechHome;
