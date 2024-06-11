import React from "react";
import { useState } from "react";
import { GoBell, GoHome } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineFeedback} from "react-icons/md";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const LabTechSidebar : React.FC = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

   const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
   }
    return(
        <> 
        <button id="LabTech-sidebar-toggle" 
                  onClick={toggleSidebar}
                  aria-controls="LabTech-sidebar"
                  type="button" 
                  className="inline-flex mt-20
                   items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <RiMenu2Fill className="h-6 w-6 mr-1" aria-hidden="true" />
               </button>        
            <aside id="LabTech-sidebar" 
               className={`fixed
                top-0 left-0 z-40 w-64 h-screen transition-transform ${
                  isSidebarOpen ? "translate-x-0" : "-translate-x-full"
               } sm:translate-x-0 pt-20`}         
               aria-label="LabTech-sidebar">
               <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/labTech-home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <GoHome className="h-6 w-6 mr-1" aria-hidden="true" />
                           <span className="ms-3">Home</span>
                        </a>
                     </li>
                     {/* <li>
                    <a href="/LabTech-labTest-requests" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <GrDocumentTest className="h-6 w-6 mr-1" aria-hidden="true" />
                        <span className="flex-1 ms-3 whitespace-nowrap">Lab Test Requests</span>
                    </a>
                    </li>
                     <li>
                    <a href="/labTech-history" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <GoHistory className="h-6 w-6 mr-1" aria-hidden="true" />
                        <span className="flex-1 ms-3 whitespace-nowrap">History</span>
                    </a>
                    </li> */}
                     <li>
                        <a href="/labTech-notifications" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <GoBell className="h-6 w-6 mr-1" aria-hidden="true" />
                           <span className="flex-1 ms-3 whitespace-nowrap">Notification</span>
                           <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                     </li>
                     <li>
                        <a href="/labTech-account" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <VscAccount className="h-6 w-6 mr-1" aria-hidden="true" />
                           <span className="flex-1 ms-3 whitespace-nowrap">Account</span>
                        </a>
                     </li>
                     <li>
                        <a href="/labTech-feedback" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           <MdOutlineFeedback className="h-6 w-6 mr-1" aria-hidden="true" />
                           <span className="flex-1 ms-3 whitespace-nowrap">Feedback</span>
                        </a>
                     </li>
                  </ul>
                  <div className="border-t border-gray-200 dark:border-gray-600 mt-4 pt-4">
                     {/* Divider above Log Out */}
                     <ul className="space-y-2 font-medium">
                        <li>
                           <a
                              href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                           >
                              <IoIosLogOut className="h-6 w-6 mr-1" aria-hidden="true" />
                              <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               {isSidebarOpen && ( 
                  <div className="absolute top-20 right-0 p-2 sm:hidden"> {/* Adjust top value as needed */}
                     <button
                        onClick={toggleSidebar}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                     >
                        <RiCloseFill className="h-6 w-6" aria-hidden="true" />
                     </button>
                  </div>
               )}
            </aside>
         </>
    )
}

export default LabTechSidebar;