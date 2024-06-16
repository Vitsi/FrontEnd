
// import React from "react";

// interface PaginationProps {
//   currentPage: number;
//   totalCards: number;
//   onPageChange: (pageNumber: number) => void;
//   cardsPerPage: number;
// }

// const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalCards,
//   onPageChange,
//   cardsPerPage,
// }) => {
//   const renderPaginationButtons = () => {
//     const numPages = Math.ceil(totalCards / cardsPerPage);
//     const maxButtonsToShow = numPages <= 5 ? numPages : 5;
//     const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
//     const endPage = Math.min(startPage + maxButtonsToShow - 1, numPages);
//     const paginationButtons = [];

//     for (let i = startPage; i <= endPage; i++) {
//       paginationButtons.push(
//         <li key={i}>
//           <button
//             className={`rounded-full px-4 py-2 ${currentPage === i ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-600 transition duration-300 ease-in-out'}`}
//             onClick={() => onPageChange(i)}
//           >
//             {i}
//           </button>
//         </li>
//       );
//     }

//     return paginationButtons;
//   };

//   return (
//     <div className="flex justify-center mt-4">
//       <div className="">
//         <ul className="flex text-gray-600 gap-4 font-medium py-2">
//           {renderPaginationButtons()}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalCards: number;
  onPageChange: (pageNumber: number) => void;
  cardsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCards,
  onPageChange,
  cardsPerPage,
}) => {
  if (totalCards === 0) return null;

  const numPages = Math.ceil(totalCards / cardsPerPage);

  const renderPaginationButtons = () => {
    const maxButtonsToShow = numPages <= 5 ? numPages : 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    const endPage = Math.min(startPage + maxButtonsToShow - 1, numPages);
    const paginationButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <li key={i}>
          <button
            className={`rounded-full px-4 py-2 ${currentPage === i ? 'bg-blue-600 text-white' : 'hover:bg-blue-200 hover:text-blue-600 transition duration-300 ease-in-out'}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return paginationButtons;
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="inline-flex items-center">
        <ul className="flex text-gray-600 gap-2 font-medium py-2">
          {renderPaginationButtons()}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
