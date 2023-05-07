// Import Icons from React Icons
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Search Component
const Search = ({ toggleSideNav }) => {
  // Import searchCatalog from useStore
  const { searchCatalog } = useStore();

  // Function to handle search input
  const handleSearchQuery = (e) => {
    const searchValue = e.target.value;
    searchCatalog(searchValue);
  };

  return (
    <div className="flex space-x-2 items-center w-full justify-center">
      {/* search input */}
      <input
        type="text"
        placeholder="Search"
        className="border-b-2 w-[60vw] md:w-auto bg-transparent focus:border-b-gray-700 border-x-0 border-t-0 text-sm md:text-lg focus:border-x-0 focus:ring-0"
        onChange={handleSearchQuery}
      />
      {/* search icon */}
      <AiOutlineSearch size={30} />
      {/* filter icon */}
      <button className="md:hidden flex" onClick={toggleSideNav}>
        <FiFilter size={25} />
      </button>
    </div>
  );
};

// Export Search Component
export default Search;
