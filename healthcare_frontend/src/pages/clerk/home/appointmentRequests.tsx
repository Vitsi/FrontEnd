import Navbar from "../../../components/common/navbar"
import ClerkSidebar from "../../../components/sidebar/clerkSidebar"

const AppointmentRequests : React.FC = () => {
    return(
    <>
      <Navbar isLoggedIn={true} />
      <ClerkSidebar />
    </>
    )
}

export default AppointmentRequests