import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import AdminSidebar from "../../../components/sidebar/adminSidebar";

const AdminPatients : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminSidebar/>
    <SearchBar/>
    </>
    )
}

export default AdminPatients;