import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "../Contact.jsx";
import "@testing-library/jest-dom";

test("Contact form should be in DOM", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
