import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import RES_API_DATA from "../../components/mocks/resApi.json";
import FetchContextProvider from "../../context/FetchContext";
import Body from "../Body";
import SearchBox from "../SearchBox";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_API_DATA);
    },
  });
});

describe("Restaurant card functionality", () => {
  it("should display list of restaurants card", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <FetchContextProvider>
            <SearchBox />
            <Body />
          </FetchContextProvider>
        </BrowserRouter>
      );
    });

    const searchBox = screen.getByRole("searchbox");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    fireEvent.change(searchBox, { target: { value: "Chinese Wok" } });
    fireEvent.click(searchBtn);
    await waitFor(async () => {
      const resCards = screen.getAllByTestId("resCard");
      expect(resCards.length).toBe(1);
    });
  });
});
