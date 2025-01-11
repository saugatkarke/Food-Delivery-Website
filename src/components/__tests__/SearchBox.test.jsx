import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { describe, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import SearchBox from "../SearchBox";
import { BrowserRouter} from "react-router";
import RES_API_DATA from "../../components/mocks/resApi.json";
import FetchContextProvider from "../../context/FetchContext";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_API_DATA);
    },
  });
});

describe("Searchbox Should Render", () => {
  it("should have a placeholder", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <FetchContextProvider>
            <SearchBox />
          </FetchContextProvider>
        </BrowserRouter>
      )
    );
    const placeHolder = screen.getByPlaceholderText(
      "Search for restaurants..."
    );
    expect(placeHolder).toBeInTheDocument();
  });
  it("should be empty", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <FetchContextProvider>
            <SearchBox />
          </FetchContextProvider>
        </BrowserRouter>
      )
    );
    const searchBox = screen.getByRole("searchbox");
    expect(searchBox).toHaveValue("");
  });
  it("should load one card for search text kfc", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <FetchContextProvider>
            <SearchBox />
          </FetchContextProvider>
        </BrowserRouter>
      )
    );
    const searchBox = screen.getByRole("searchbox");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchBox, { target: { value: "kfc" } });
    fireEvent.click(searchBtn);
    expect(searchBox).toBeInTheDocument();
  });
});
