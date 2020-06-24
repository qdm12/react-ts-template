import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Text/i);
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  expect(element).toHaveTextContent("Text");
});
