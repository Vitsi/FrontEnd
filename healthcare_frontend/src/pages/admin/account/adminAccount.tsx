import Navbar from "../../../components/common/navbar";
import AdminLayout from "../notifications/layoutAdmin";

const AdminAccount : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminLayout children={undefined}>
        
    </AdminLayout>
    </>
    )
}

export default AdminAccount;