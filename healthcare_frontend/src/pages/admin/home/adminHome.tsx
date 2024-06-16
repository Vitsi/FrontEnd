import Navbar from "../../../components/common/navbar";
import AdminLayout from "../notifications/layoutAdmin";

const AdminHome : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminLayout>
    <div className="p-5 sm:ml-64">

    </div>
    </AdminLayout>
    </>
    )
}

export default AdminHome;