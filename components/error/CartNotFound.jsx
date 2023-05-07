// Import Link from next.js
import Link from "next/link";

// Import Shopping cart icon from react-icons
import { GiShoppingCart } from "react-icons/gi";

// CartNotFound component
const CartNotFound = () => {
  return (
    <div className="text-center w-full justify-center space-y-5 py-5 flex flex-col items-center">
      <h4 className="font-playfair text-2xl md:text-4xl">Oops!</h4>
      <GiShoppingCart size={100} />
      <div className="text-gray-500">
        <p className="text-sm md:text-xl">Looks like your cart is empty.</p>
        <p className="text-sm md:text-xl">
          You can explore our products by clicking below!
        </p>
      </div>
      {/* Link to products page */}
      <Link
        href={"/"}
        className="border-2 w-1/3 md:w-auto border-black text-black px-2 md:px-5 py-2 text-sm md:text-xl rounded-lg duration-500 hover:bg-black hover:text-white"
      >
        Products
      </Link>
    </div>
  );
};

// Export CartNotFound
export default CartNotFound;
