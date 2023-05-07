// ProductNotFound component
const ProductNotFound = () => {
  return (
    <div className="space-y-5 w-full flex flex-col text-center justify-center h-[50vh]">
      <h3 className="text-5xl font-playfair">Oops! We&apos;re Sorry</h3>

      <p className="text-2xl text-gray-500">
        We couldn&apos;t find any products related to your search!
      </p>
    </div>
  );
};

// Export component
export default ProductNotFound;
