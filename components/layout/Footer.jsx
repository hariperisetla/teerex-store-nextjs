// Import Link from nextjs
import Link from "next/link";

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white text-center mt-10">
      <div className="container mx-auto p-10 max-w-4xl space-y-3">
        <h3 className="font-playfair text-xl md:text-3xl">TeeRex Store</h3>
        <p className="text-[10px] md:text-sm">
          TeeRex store is a simple webapp where customers can browse through the
          catalog of t-shirts, add t-shirts to the shopping cart and checkout
          the items in the cart.
        </p>
      </div>
      <div className="bg-gray-950 p-3 text-[10px] md:text-sm">
        Designed and Developer by{" "}
        <Link
          className="border-b"
          href={"https://github.com/hariperisetla"}
          target="_blank"
        >
          Hari Perisetla
        </Link>
      </div>
    </footer>
  );
};

// Export Footer Component
export default Footer;
