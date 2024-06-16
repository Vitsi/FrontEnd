import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import AdminLayout from "../notification/layoutAdmin";

const AdminHospitals: React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <SearchBar/>
    <AdminLayout children={undefined}>
        
    </AdminLayout>
    </>
    )
}

export default AdminHospitals;