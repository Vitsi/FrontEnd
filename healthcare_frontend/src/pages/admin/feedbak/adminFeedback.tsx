import Navbar from "../../../components/common/navbar";
import AdminLayout from "../notification/layoutAdmin";

const AdminFeedback : React.FC = () => {
    return (
    <>
    <Navbar isLoggedIn={true}/>
    <AdminLayout children={undefined}>
        
    </AdminLayout>
    </>
    )
}

export default AdminFeedback;