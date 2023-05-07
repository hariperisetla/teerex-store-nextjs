import { render, screen, getByTestId } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import Cart from "@/pages/cart";
import { CartItem, Summary } from "@/components/cart";
import { CartNotFound } from "@/components/error";

describe("Cart Page", () => {
  test("renders Cart page without crashing", () => {
    render(
      <StoreProvider>
        <Cart />
      </StoreProvider>
    );
  });

  test("renders CartItem component in Cart Page", () => {
    render(
      <StoreProvider>
        <CartItem />
      </StoreProvider>
    );
  });

  test("renders CartNotFound component in Cart Page", () => {
    render(
      <StoreProvider>
        <CartNotFound />
      </StoreProvider>
    );
  });

  test("renders Summary component in Cart Page", () => {
    render(
      <StoreProvider>
        <Summary />
      </StoreProvider>
    );
  });
});
