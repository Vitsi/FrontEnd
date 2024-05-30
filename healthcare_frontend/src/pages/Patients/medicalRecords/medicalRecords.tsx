import Navbar from "../../../components/common/navbar"
import SearchBar from "../../../components/common/searchBar"
import PatientSidebar from "../../../components/sidebar/patientSidebar"

const MedicalRecords : React.FC = () => {
    return(
    <>
      <Navbar isLoggedIn={true} />
      <PatientSidebar />
      <SearchBar />
    </>
    )
}

export default MedicalRecords