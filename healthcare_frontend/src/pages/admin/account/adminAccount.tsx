import Navbar from "../../../components/common/navbar";
import AdminSidebar from "../../../components/sidebar/adminSidebar";

const AdminAccount : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminSidebar/>
    </>
    )
}

export default AdminAccount;