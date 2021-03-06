import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";

// Ok, so here's what your tests might look like

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export default function renderWithRouter(
  ui,
  { route = "/", history = createHashHistory({ basename: route }) } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
