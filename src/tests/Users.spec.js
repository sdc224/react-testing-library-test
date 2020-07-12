import React from "react";
import { render, waitForElement, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Users, { url } from "../Users";

afterEach(() => {
  axios.get.mockClear();
});

function mockCall() {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          name: {
            first: "ali",
          },
        },
        {
          name: {
            first: "abu",
          },
        },
      ],
    },
  });
}

test('show loader when it"s fetching data', async () => {
  mockCall();

  const { getByText, getAllByTestId } = render(<Users />);
  expect(getByText(/loading.../i)).toBeInTheDocument();

  // for avoiding act error
  await waitForElement(() => getAllByTestId("row"));
  cleanup();
});

test("render users' name on rows", async () => {
  mockCall();

  const { getAllByTestId } = render(<Users />);

  //check what's rendered in the row
  const rowValues = await waitForElement(() =>
    getAllByTestId("row").map((row) => row.textContent)
  );
  expect(rowValues).toEqual(["ali", "abu"]);
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
  cleanup();
});
