import Navbar from "../../../components/common/navbar";
import SearchBar from "../../../components/common/searchBar";

const HcpHome: React.FC = () => {
    return (
        <>
           <Navbar isLoggedIn={true} />
           
           <SearchBar/>
        </>
    );
}

export default HcpHome;
