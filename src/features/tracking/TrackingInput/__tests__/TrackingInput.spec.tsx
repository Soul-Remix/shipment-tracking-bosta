import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TrackingInput from "../TrackingInput";

describe("Tracking Input test", () => {
  beforeEach(() => {
    const onInputChange = (val: string) => {};
    const onSubmit = () => {};

    render(
      <TrackingInput
        onInputChange={onInputChange}
        inputValue={"input value"}
        onSubmit={onSubmit}
      />
    );
  });

  test("Input should render correctly", () => {
    expect(screen.getByTestId("tracking-input")).toBeDefined();
  });

  test("Button should render correctly", () => {
    expect(screen.getByTestId("tracking-button")).toBeDefined();
  });
});
