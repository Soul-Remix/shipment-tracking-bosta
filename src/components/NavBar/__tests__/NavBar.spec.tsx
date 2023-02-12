import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

describe("Nav Bar test", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  test("Should render correctly", () => {
    expect(screen.getByTestId("navBar")).toBeDefined();
  });
});
