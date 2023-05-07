// ProductDetails component
const ProductDetails = ({ product }) => {
  return (
    <div className="flex flex-col text-left w-full font-playfair">
      {/* Product Name */}
      <h5 className="text-2xl">{product.name}</h5>
      <h6 className="text-gray-500 text-sm font-poppins">
        {/* Product Details */}
        {product.color} | {product.type} | {product.gender}
      </h6>
    </div>
  );
};

// Export productDetails
export default ProductDetails;
