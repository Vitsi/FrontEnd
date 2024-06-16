import Navbar from "../../../components/common/navbar"
import SearchBar from "../../../components/common/searchBar"
import Layout from "../notifications/layoutPatients"

const MedicalRecords : React.FC = () => {
    return(
    <>
     <Layout>
      <Navbar isLoggedIn={true} />
      <SearchBar />
      </Layout>
    </>
    )
}

export default MedicalRecords