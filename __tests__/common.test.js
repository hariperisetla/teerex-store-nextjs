import { render } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import { ProductControls, ProductDetails } from "@/components/common";

describe("Common Components", () => {
  test("renders ProductControls Component", () => {
    render(
      <StoreProvider>
        <ProductControls />
      </StoreProvider>
    );
  });

  test("renders ProductDetails Component", () => {
    render(
      <StoreProvider>
        <ProductDetails />
      </StoreProvider>
    );
  });
});
