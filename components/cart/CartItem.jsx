// Import Image component from next js
import Image from "next/image";

// Import Icons from React Icons
import { RxCross2 } from "react-icons/rx";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Import ProductControls, ProductDetails from common
import { ProductControls, ProductDetails } from "../common";

// CartItem component
const CartItem = ({ product }) => {
  // Import removeCartItems from useStore
  const { removeCartItems } = useStore();

  // Function to handle remove cart item button
  const handleRemoveCartItem = () => {
    removeCartItems(product);
  };

  return (
    <div>
      <div
        key={product.id}
        className="grid grid-cols-3 md:grid-cols-6 mx-auto items-center justify-between p-5"
      >
        <div className="h-32 relative grid-cols-1 w-full">
          {/* Image component */}
          <Image
            src={product.imageURL}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="object-contain p-3"
          />
        </div>
        <div className="col-span-2">
          {/* ProductDetails Component */}
          <ProductDetails product={product} />
        </div>

        {/* ProductControls Component */}
        <ProductControls product={product} />

        {/* Product price */}
        <h5 className="text-lg text-center">&#8377; {product.price}</h5>

        {/* Remove Cart Item Icon */}
        <RxCross2
          size={20}
          className=" hover:text-gray-800 cursor-pointer w-full"
          onClick={handleRemoveCartItem}
        />
      </div>
    </div>
  );
};

// Export cartItem
export default CartItem;
