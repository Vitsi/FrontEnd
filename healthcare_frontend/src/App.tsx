import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignupPatients from './pages/login/signupPatients';
import Signin from './pages/login/signin';
import SignupHospitals from './pages/login/signupHcp';
import PatientHome from './pages/Patients/home/patientHome';
import Appointments from './pages/Patients/appointments/appointments';
import MedicalRecords from './pages/Patients/medicalRecords/medicalRecords';
import PatientAccount from './pages/Patients/account/parientAccount';
import Feedback from './pages/Patients/feedback/feedback';
import HcpHome from './pages/hcp/home/hcpHome';
import ManageStaff from './pages/hcp/staff/manageStaff';
import RegisterStaff from './pages/hcp/staff/registerStaff';
import HcpAccount from './pages/hcp/account/hcpAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup-patient" element={<SignupPatients />} />
        <Route path="/signup-hospital" element={<SignupHospitals />} />
      </Routes>
      <Routes>
        <Route path="/patient-home" element={<PatientHome/>} />
        <Route path="/patient-appointments" element={<Appointments/>} />
        <Route path="/patient-medicalRecords" element={<MedicalRecords/>} />
        <Route path="/patient-account" element={<PatientAccount/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
      <Routes>
        <Route path="/hcp-home" element={<HcpHome/>} />
        <Route path="/hcp-manage-staff" element={<ManageStaff/>} />
        <Route path="/hcp-register-staff" element={<RegisterStaff/>} />
        <Route path="/hcp-account" element={<HcpAccount/>} />
        {/* <Route path="/feedback" element={<Feedback/>} /> */}
      </Routes>
    </Router>
  
  );
};

export default App;
