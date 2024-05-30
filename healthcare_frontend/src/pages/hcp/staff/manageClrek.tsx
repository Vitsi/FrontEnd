import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StaffCard, { StaffCardData } from "../../../components/cards/satffCard";
import LoadingSpinner from "../../../components/common/loadingSpinner";
import Pagination from "../../../components/common/pagination";
import { fetchTotalCards } from "../../../services/hospitalCardsFetch";

const ManageClerk : React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const [loading, setLoading] = useState(false);
  const [staffList, setStaffList] = useState<StaffCardData[]>([]);
  const cardsPerPage = 12;

  const fetchTotalCardsData = async (page: number) => {
    setLoading(true);
    try {
      const total = await fetchTotalCards(page);
      setTotalCards(total);
      // Populate staffList for demonstration
      const staffData = Array.from({ length: total }, (_, i) => ({
        staffName: `Clerk${i}`,
        profession: 'Clerk',
        specialization: `Specialization : ${i}`,
        staffID: `ID : ${i}`,
        imageUrl: null,
      }));
      setStaffList(staffData);
    } catch (error) {
      console.error('Error fetching total cards:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalCardsData(currentPage);
  }, [currentPage]);

  const handleDelete = (staffID: string) => {
    setStaffList(prevList => prevList.filter(staff => staff.staffID !== staffID));
    // fetch(`/api/deleteStaff/${staffID}`, { method: 'DELETE' });
  };

  const renderStaffCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
    return staffList.slice(startIndex, endIndex).map(staff => (
      <StaffCard key={staff.staffID} {...staff} onDelete={handleDelete} />
    ));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-start items-center p-5 sm:ml-64">
        <Link to="/hcp-register-staff" className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300">
          Register new staff
        </Link>
      </div>
      <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-2">
          {renderStaffCards()}
        </div>
      </div>
      <div className="pagination grid place-items-center">
        <div className="md:ml-48 sm:ml-64 sm:pl-4 sm:pt-4">
          <div className="join">
            <Pagination
              currentPage={currentPage}
              totalCards={totalCards}
              onPageChange={handlePageChange}
              cardsPerPage={cardsPerPage}
            />
          </div>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  )
}
  
  
  
  export default ManageClerk
  