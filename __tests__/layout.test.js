import { render } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import { Header, Footer, SideBar } from "@/components/layout";

describe("Layout", () => {
  test("renders Header component", () => {
    render(
      <StoreProvider>
        <Header />
      </StoreProvider>
    );
  });

  test("renders Footer component", () => {
    render(
      <StoreProvider>
        <Footer />
      </StoreProvider>
    );
  });

  test("renders SideBar component", () => {
    render(
      <StoreProvider>
        <SideBar />
      </StoreProvider>
    );
  });
});
