// Import Image component from next.js
import Image from "next/image";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Import ProductControls, ProductDetails from common
import { ProductControls, ProductDetails } from "../common";

// Product component
const Product = ({ product }) => {
  // Import addCartItems, shoppingCart from useStore
  const { addCartItems, shoppingCart } = useStore();

  // Function to handle Cart button
  const handleCartButton = () => {
    addCartItems(product);
  };

  return (
    <div
      key={product.id}
      className="border rounded-xl items-center justify-center space-y-3 flex flex-col bg-white text-center p-5"
    >
      <div className="w-full h-48 relative">
        {/* Image Component */}
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

      {/* ProductDetails Component */}
      <ProductDetails product={product} />

      <div className="w-full flex justify-between items-center">
        <h3 className="text-2xl">&#8377; {product.price}</h3>

        {shoppingCart.find(({ id }) => id === product.id) ? (
          // ProductControls Component
          <ProductControls product={product} />
        ) : (
          // Add to cart button
          <button
            onClick={handleCartButton}
            className="py-2 px-5 hover:bg-black hover:text-white duration-500 border-black text-sm text-black rounded-lg border-2"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
