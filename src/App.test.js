import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  cleanup();
});

test("renders image", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId(/image/i)).toBeTruthy();
  cleanup();
});

test("renders Users component", async () => {
  const { getByText, findAllByText } = render(<App />);
  fireEvent.click(getByText(/fetch/i));
  const usersNode = await findAllByText(/loading.../i);
  expect(usersNode).toBeTruthy();
  cleanup();
});
