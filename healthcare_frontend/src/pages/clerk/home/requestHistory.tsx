import Navbar from "../../../components/common/navbar"
import ClerkSidebar from "../../../components/sidebar/clerkSidebar"

const RequestHistory : React.FC = () => {
    return(
    <>
      <Navbar isLoggedIn={true} />
      <ClerkSidebar />
    </>
    )
}

export default RequestHistory