import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../Home";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  cleanup();
});

test("renders image", () => {
  const { queryByTestId } = render(<Home />);
  expect(queryByTestId(/image/i)).toBeTruthy();
  cleanup();
});
