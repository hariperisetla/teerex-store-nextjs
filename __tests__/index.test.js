import { render } from "@testing-library/react";
import { StoreProvider } from "@/context/StoreContext";
import Home from "@/pages";
import { Search, Product } from "@/components/home";
import { SideBar } from "@/components/layout";
import { ProductNotFound } from "@/components/error";

describe("Home Page", () => {
  test("renders Home page without crashing", () => {
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
  });

  test("renders Search component in Home Page", () => {
    render(
      <StoreProvider>
        <Search />
      </StoreProvider>
    );
  });

  test("renders SideBar component in Home Page", () => {
    render(
      <StoreProvider>
        <SideBar />
      </StoreProvider>
    );
  });

  test("renders Product component in Home Page", () => {
    render(
      <StoreProvider>
        <Product />
      </StoreProvider>
    );
  });

  test("renders ProductNotFound component in Home Page", () => {
    render(
      <StoreProvider>
        <ProductNotFound />
      </StoreProvider>
    );
  });
});
