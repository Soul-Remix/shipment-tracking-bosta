import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LangSelector from "../LangSelector";

describe("Lang Selector test", () => {
  beforeEach(() => {
    render(<LangSelector />);
  });

  test("Should render correctly", () => {
    expect(screen.getByTestId("lang-selector")).toBeDefined();
  });

  test("Lang selector button should render", () => {
    expect(screen.getByTestId("lang-selector-button")).toBeDefined();
  });
});
