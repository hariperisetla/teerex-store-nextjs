// Import icons from react-icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// ProductControls component
const ProductControls = ({ product }) => {
  // Import updateSelectedQuantity, shoppingCart from useStore
  const { updateSelectedQuantity, shoppingCart } = useStore();

  // Function to handle product quantity update
  const handleUpdateQuantity = (value) => {
    updateSelectedQuantity(product, value);
  };

  return (
    <div className="flex space-x-3 items-center">
      {/* Decrement icon */}
      <AiOutlineMinus
        size={25}
        value={1}
        className="hover:text-gray-800 cursor-pointer"
        onClick={() => handleUpdateQuantity(-1)}
      />
      {/* Current Item quantity in cart */}
      <div className="text-xl border-2 border-black rounded-lg px-3">
        {shoppingCart.find(({ id }) => id === product.id)?.selectedQuantity ||
          0}
      </div>

      {/* Increment icon */}
      <AiOutlinePlus
        size={25}
        className="hover:text-gray-800 cursor-pointer"
        onClick={() => handleUpdateQuantity(1)}
      />
    </div>
  );
};

// Export ProductControls
export default ProductControls;
