import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("Error Message test", () => {
  beforeEach(() => {
    render(<ErrorMessage shipmentNum="123456" />);
  });

  test("Should render correctly", () => {
    expect(screen.getByTestId("errorMessage")).toBeDefined();
  });

  test("Shipment num Should render correctly", () => {
    expect(screen.getByTestId("shipmentNum")).toBeDefined();
  });

  test("shipment num is set correctly", () => {
    expect(screen.getByTestId("shipmentNum").textContent).contain("123456");
  });
});
