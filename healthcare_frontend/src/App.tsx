import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignupPatients from './pages/login/signupPatients';
import Signin from './pages/login/signin';
import SignupHospitals from './pages/login/signupHcp';
import PatientHome from './pages/Patients/patientHome';

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
      </Routes>
    </Router>
  );
};

export default App;