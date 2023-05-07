// Import useState, useEffect for handling state variables
import React, { useEffect, useState } from "react";

// Import useStore from StoreContext
import { useStore } from "@/context/StoreContext";

// Import required Components for Cart page
import { Summary, CartItem } from "@/components/cart";
import { CartNotFound } from "@/components/error";

// Cart Page
const Cart = () => {
  // Import required state variables from useStore()
  const { shoppingCart } = useStore();

  // Create total state for handling total amount of the cart items
  const [total, setTotal] = useState(0);

  // This useEffect is to calculate the total amount of the cart items stored in the cart
  useEffect(() => {
    if (shoppingCart.length !== 0) {
      // using reduce and calculating the total amount total + selectedQuantity of the item * price of each the item
      const subtotal = shoppingCart.reduce((total, item) => {
        return total + item.selectedQuantity * item.price;
      }, 0);

      // store total using setTotal
      setTotal(subtotal);
    } else {
      // if nothing is there is shopping cart set the total as 0
      setTotal(0);
    }
  }, [shoppingCart, setTotal]);

  return (
    <div className="pt-24 w-full md:w-3/4 mx-auto flex flex-col md:px-0 px-6">
      {/* Cart container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2">
        <div className="col-span-4 bg-white p-5 rounded-xl">
          {/* Shopping cart heading */}
          <h3 className="text-3xl font-playfair px-5">Shopping Cart</h3>
          <div className="border-b-2 pt-4"></div>

          {/* Conditional Redering if the shoppingCart is not empty with length is not 0 
          then render the CartItem component using map else render CartNotFound component */}
          {shoppingCart.length !== 0 ? (
            shoppingCart.map((product, id) => (
              // Cart Component
              <CartItem key={id} product={product} />
            ))
          ) : (
            // CartNotFound Component
            <CartNotFound />
          )}
        </div>
        <Summary total={total} />
      </div>
    </div>
  );
};

// Export Cart Page
export default Cart;
