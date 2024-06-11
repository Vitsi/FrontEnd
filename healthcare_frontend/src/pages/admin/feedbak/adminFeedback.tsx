import Navbar from "../../../components/common/navbar";
import AdminSidebar from "../../../components/sidebar/adminSidebar";

const AdminFeedback : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminSidebar/>
    </>
    )
}

export default AdminFeedback;