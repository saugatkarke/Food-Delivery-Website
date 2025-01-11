import { render, screen, act, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import CartIcon from "../CartIcon";
import Cart from "../Cart";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import FetchContextProvider from "../../context/FetchContext";
import MOCK_API_DATA from "../../components/mocks/resMenuApi.json";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_API_DATA),
  });
});

describe("Cart functionality", () => {
  test("Cart item should increment by one on a add to cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FetchContextProvider>
              <CartIcon />
              <RestaurantMenu />
            </FetchContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });

    const resMenuCard = screen.getAllByTestId("menuBtn");
    fireEvent.click(resMenuCard[1]);
    const resExpandMenuBtn = screen.getAllByRole("button", {
      name: "Add to Cart",
    });
    fireEvent.click(resExpandMenuBtn[0]);
    const cartIconCount = screen.getByText("1");
    expect(cartIconCount).toBeInTheDocument();
  });
  test("Cart component should have items", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FetchContextProvider>
              <CartIcon />
              <Cart />
              <RestaurantMenu />
            </FetchContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });

    const resMenuCard = screen.getAllByTestId("menuBtn");
    fireEvent.click(resMenuCard[1]);
    const resExpandMenuBtn = screen.getAllByRole("button", {
      name: "Add to Cart",
    });
    fireEvent.click(resExpandMenuBtn[0]);
    const cartCount = screen.getAllByTestId("cartItems").length;
    expect(cartCount).toBe(2);
  });
  test("Cart should be clear", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FetchContextProvider>
              <CartIcon />
              <Cart />
              <RestaurantMenu />
            </FetchContextProvider>
          </Provider>
        </BrowserRouter>
      );
    });
    const clearCartBtn = screen.getByRole("button", {
      name: "Clear Cart",
    });

    fireEvent.click(clearCartBtn);
    const warnTxt = screen.getByText("Oops!! Your Cart is Empty");
    expect(warnTxt).toBeInTheDocument();
  });
});
