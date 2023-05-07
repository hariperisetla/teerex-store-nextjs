import { render } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import AppLayout from "@/layouts/AppLayout";
import StatusMessage from "@/components/error/StatusMessage";

describe("AppLayout", () => {
  test("renders AppLayout without crashing", () => {
    render(
      <StoreProvider>
        <AppLayout />
      </StoreProvider>
    );
  });

  test("renders StatusMessage Component", () => {
    render(
      <StoreProvider>
        <StatusMessage />
      </StoreProvider>
    );
  });
});
