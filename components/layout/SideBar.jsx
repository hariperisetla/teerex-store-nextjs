// Import Image Component from next.js
import Image from "next/image";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Import Check Image
import CheckImg from "../../assets/check.svg";

// Import Components from filters
import ColorCheckbox from "../filters/ColorCheckbox";
import PriceCheckbox from "../filters/PriceCheckbox";
import CommonCheckbox from "../filters/CommonCheckbox";

// SideBar Component
const SideBar = ({ sideNav }) => {
  // Import categoryFilters, addSelectedFilters from useStore()
  const { categoryFilters, addSelectedFilters } = useStore();

  // Function to handle selected filters from the checkboxes
  function handleFilterCheckbox(name, e) {
    const { value, checked } = e.target;
    // Function from Context to add selected filters to filters list
    addSelectedFilters(name, value, checked);
  }

  return (
    <div
      className={`${
        sideNav ? "" : `hidden`
      } md:flex md:flex-col min-h-[60vh] md:w-[10rem] lg:w-[15rem] xl:w-[18rem] space-y-5 absolute md:fixed bg-white md:ml-5 mx-5 md:mx-auto md:mt-5 p-5 md:p-5 border rounded-xl z-10`}
    >
      {/*  Conditional Rendering based on Color, Gender, Price, Type differentiated */}
      {categoryFilters.map((filter, id) => (
        <div key={id}>
          {/* Filter Name */}
          <h4 className="text-lg font-bold pb-1 capitalize font-playfair">
            {filter.name}
          </h4>
          <ul
            className={`text-md flex flex-wrap ${
              filter.name === "color" ? "flex-row" : "flex-col"
            }`}
          >
            {filter.labels.map((label, id) => (
              <li
                key={id}
                className="items-center space-x-1 flex font-medium text-black"
              >
                <label
                  htmlFor={filter.name === "price" ? label.range : label}
                  className="capitalize checked:text-black relative cursor-pointer items-center flex"
                >
                  {filter.name === "color" ? (
                    // Color Checkbox Component
                    <ColorCheckbox
                      label={label}
                      filter={filter}
                      handleFilterCheckbox={handleFilterCheckbox}
                    />
                  ) : filter.name === "price" ? (
                    // Price Checkbox Component
                    <PriceCheckbox
                      label={label}
                      filter={filter}
                      handleFilterCheckbox={handleFilterCheckbox}
                    />
                  ) : (
                    // Common Checkbox Component
                    <CommonCheckbox
                      label={label}
                      filter={filter}
                      handleFilterCheckbox={handleFilterCheckbox}
                    />
                  )}

                  {filter.name === "color" ? (
                    // Image check wrapper for color checkbox
                    <Image
                      src={CheckImg}
                      alt="check"
                      className="absolute color-check opacity-0 w-10 h-8 right-1"
                    />
                  ) : filter.name === "price" ? (
                    label.range
                  ) : (
                    label
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Export SideBar component
export default SideBar;
