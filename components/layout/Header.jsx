// Importing the Link component from next.js
import Link from "next/link";

// Importing the HiOutlineShoppingBag icon from react-icons
import { HiOutlineShoppingBag } from "react-icons/hi";

import { useStore } from "@/context/StoreContext";
import { useEffect, useState } from "react";

// Header Component
const Header = () => {
  const { shoppingCart } = useStore();

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (shoppingCart.length !== 0) {
      const totalItems = shoppingCart.reduce((total, item) => {
        return total + item.selectedQuantity;
      }, 0);

      setTotalItems(totalItems);
    } else {
      setTotalItems(0);
    }
  }, [shoppingCart]);

  return (
    <header className="flex justify-between px-5 md:px-8 py-5 border-b bg-white text-black font-playfair fixed w-full z-20 items-center">
      {/* Logo && Home link */}
      <Link href="/" className="text-2xl font-medium">
        TeeRex Store
      </Link>

      <ul className="flex space-x-3 md:space-x-5 text-lg md:text-xl capitalize text-gray-800 items-center">
        <li>
          {/* Products link */}
          <Link href={"/"} className="hover:underline">
            Products
          </Link>
        </li>

        <li>
          <Link href={"/cart"} className="flex">
            {/* Cart link */}
            <HiOutlineShoppingBag size={30} />
            {/* Cart Items total */}
            <span className="absolute top-1 right-3 text-md font-poppins text-gray-800 p-1 rounded-xl">
              {totalItems && totalItems.length !== 0 ? totalItems : null}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

// Exporting the Header component
export default Header;
