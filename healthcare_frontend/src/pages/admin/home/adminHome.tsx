import Navbar from "../../../components/common/navbar";
import AdminSidebar from "../../../components/sidebar/adminSidebar";

const AdminHome : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminSidebar/>
    </>
    )
}

export default AdminHome;