import { render } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import {
  ColorCheckbox,
  CommonCheckbox,
  PriceCheckbox,
} from "@/components/filters";

describe("Filters components", () => {
  test("renders ColorCheckbox component", () => {
    render(
      <StoreProvider>
        <ColorCheckbox />
      </StoreProvider>
    );
  });

  test("renders ColorCheckbox component", () => {
    render(
      <StoreProvider>
        <CommonCheckbox />
      </StoreProvider>
    );
  });

  test("renders ColorCheckbox component", () => {
    render(
      <StoreProvider>
        <PriceCheckbox />
      </StoreProvider>
    );
  });
});
