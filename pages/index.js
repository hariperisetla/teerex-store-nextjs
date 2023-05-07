// Import useState for handling state variables
import { useState } from "react";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Import required Components for Home/Product page
import { SideBar } from "@/components/layout";
import { Search, Product } from "@/components/home";
import { ProductNotFound } from "@/components/error";
import StatusMessage from "@/components/error/StatusMessage";

// Home/Product Page
const Home = () => {
  // Import productCatalogue from useStore()
  const { productCatalogue } = useStore();

  // Create sideNav state for handling sideBar in Mobile view
  const [sideNav, setSideNav] = useState(false);

  // Function to handle sideNav visibility (true or false)
  const toggleSideNav = () => {
    setSideNav(!sideNav);
  };

  // Render Home page
  return (
    <div className="pt-24 space-y-5">
      {/* Search Component */}
      <Search toggleSideNav={toggleSideNav} />

      {/* SideBar Component */}
      <SideBar sideNav={sideNav} />

      {/* Products Component */}
      <div className="md:ml-[12rem] lg:ml-[16rem] xl:ml-[20rem]">
        {/* Conditional Rendering if productCatalogue is available
            then check for productCatalogue length and return Product not found if it is 0
            else render products */}
        {productCatalogue && productCatalogue.length === 0 ? (
          // ProductNotFound Component
          <ProductNotFound />
        ) : (
          // Product Component
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-12 mx-6 md:mx-5">
            {productCatalogue.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Export Home Page
export default Home;
