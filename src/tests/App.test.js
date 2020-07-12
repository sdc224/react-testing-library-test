import React from "react";
import { fireEvent, cleanup, screen } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "../utils/testing/renderWithRouter";

const leftClick = { button: 0 };

test("navigate to about", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  expect(getByTestId(/home/i)).toBeTruthy();
  fireEvent.click(screen.getByText(/about/i), leftClick);
  expect(container.innerHTML).toMatch("Inside About");
  cleanup();
});

test("navigate to users", async () => {
  const { findAllByText } = renderWithRouter(<App />);
  fireEvent.click(screen.getByText(/users/i), leftClick);
  const usersNode = await findAllByText(/loading.../i);
  expect(usersNode).toBeTruthy();
  cleanup();
});
