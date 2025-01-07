import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import CartIcon from "../CartIcon";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

describe("CartIcon Should Render", () => {
  test("Cart item count should be 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <CartIcon />
        </Provider>
      </BrowserRouter>
    );
    const cartCount = screen.getByText("0");
    expect(cartCount).toBeInTheDocument();
  });
});
