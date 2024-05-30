import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";
import HcpSidebar from "../../../components/sidebar/hcpSidebar";

const HcpHome: React.FC = () => {
    return (
        <>
           <Navbar isLoggedIn={true} />
           <HcpSidebar/>
           <SearchBar/>
        </>
    );
}

export default HcpHome;
