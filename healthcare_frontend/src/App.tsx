import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/home';
import SignupPatients from './pages/login/signupPatients';
import Signin from './pages/login/signin';
import SignupHospitals from './pages/login/signupHcp';
import PatientHome from './pages/Patients/home/patientHome';
import Appointments from './pages/Patients/appointments/appointments';
import PatientAccount from './pages/Patients/account/parientAccount';
import Feedback from './pages/Patients/feedback/feedback';
import ManageStaff from './pages/hcp/staff/manageStaff';
import RegisterStaff from './pages/hcp/staff/registerStaff';
import HcpAccount from './pages/hcp/account/hcpAccount';
import HcpFeedback from './pages/hcp/feedback/hcpFeedback';
import DoctorHome from './pages/doctor/home/doctorHome';
import DoctorCalandar from './pages/doctor/calendar/calendar';
import DoctorAccount from './pages/doctor/account/doctorAccount';
import DoctorFeedback from './pages/doctor/feedback/doctorFeedback';
import ClerkHome from './pages/clerk/home/clerkHome';
import ClerkAccount from './pages/clerk/account/clerkAccount';
import ClerkFeedback from './pages/clerk/feedback/clerkFeedback';
import PatientRequest from './pages/Patients/appointments/patientRequest';
import LabTechFeedback from './pages/labTech/feedback/clabTechFeedback';
import LabTechAccount from './pages/labTech/account/labTechAccount';
import LabTechHome from './pages/labTech/home/labTechHome';
import AdminHome from './pages/admin/home/adminHome';
import AdminAccount from './pages/admin/account/adminAccount';
import AdminFeedback from './pages/admin/feedbak/adminFeedback';
import AdminHospitals from './pages/admin/hospitals/adminHospitals';
import AdminPatients from './pages/admin/patients/adminPatients';
import ChatBot from './pages/Patients/chatbot/chatBot';
import MedicalRecord from './pages/doctor/home/medicalRecord';
import NotifPatients from './pages/Patients/notifications/notifPatients';
import NotiflabTechs from './pages/labTech/notifications/notifLabTech';
import PageNotFound from './components/common/pageNotFound';
import NotifDoctors from './pages/doctor/notifications/notifDoctor';
import NotifClerk from './pages/clerk/notifications/notifClerk';
import NotifHcp from './pages/hcp/notifications/notifHcp';
import NotifAdmin from './pages/admin/notifications/notifAdmin';
import NotificationTester from './pages/doctor/notifications/notifTester';
import MedicalHistory from './pages/doctor/home/medicalHistory';
import PersonalMedicalRecords from './pages/Patients/medicalRecords/medicalRecords';
import FaqPage from './pages/landing/faq';
import AboutUsPage from './pages/landing/AboutUs';
import ServicesPage from './pages/landing/services';
import FeaturesPage from './pages/landing/features';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup-patient" element={<SignupPatients />} />
          <Route path="/signup-hospital" element={<SignupHospitals />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/features" element={<FeaturesPage />} />


          <Route path="/patient-home" element={<PatientHome />} />
          <Route path="/patient-appointments" element={<Appointments />} />
          <Route path="/patient-requests" element={<PatientRequest />} />
          <Route path="/patient-medicalRecords" element={<PersonalMedicalRecords />} />
          <Route path="/patient-account" element={<PatientAccount />} />
          <Route path="/patient-notifications" element={<NotifPatients />} />
          <Route path="/patient-feedback" element={<Feedback />} />
          <Route path="/chatbot" element={<ChatBot />} />

          <Route path="/hcp-manage-staff" element={<ManageStaff />} />
          <Route path="/hcp-register-staff" element={<RegisterStaff />} />
          <Route path="/hcp-account" element={<HcpAccount />} />
          <Route path="/hcp-feedback" element={<HcpFeedback />} />
          <Route path="/hcp-notifications" element={<NotifHcp />} />

          <Route path="/doctor-home" element={<DoctorHome />} />
          <Route path="/medical-record/:recordNumber" element={<MedicalRecord />}/>
          <Route path="/medical-history/:recordNumber" element={<MedicalHistory/>}/> 
          <Route path="/doctor-calendar" element={<DoctorCalandar />} />
          <Route path="/doctor-account" element={<DoctorAccount />} />
          <Route path="/doctor-feedback" element={<DoctorFeedback />} />
          <Route path="/doctor-notifications" element={<NotifDoctors />} />
          <Route path="/test" element={<NotificationTester/>} />

          <Route path="/clerk-home" element={<ClerkHome />} />
          <Route path="/clerk-account" element={<ClerkAccount />} />
          <Route path="/clerk-feedback" element={<ClerkFeedback />} />
          <Route path="/clerk-notifications" element={<NotifClerk />} />

          <Route path="/labTech-home" element={<LabTechHome />} />
          <Route path="/labTech-account" element={<LabTechAccount />} />
          <Route path="/labTech-feedback" element={<LabTechFeedback />} />
          <Route path="/labTech-notifications" element={<NotiflabTechs />} />

          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-hospitals" element={<AdminHospitals />} />
          <Route path="/admin-patients" element={<AdminPatients />} />
          <Route path="/admin-account" element={<AdminAccount />} />
          <Route path="/admin-feedback" element={<AdminFeedback />} />
          <Route path="/admin-notifications" element={<NotifAdmin/>} />

          {/* Catch-all route for Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
