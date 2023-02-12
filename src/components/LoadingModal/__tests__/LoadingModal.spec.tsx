import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LoadingModal from "../LoadingModal";

describe("Loading Modal test", () => {
  test("Should render correctly", () => {
    render(<LoadingModal isOpen={true} />);

    expect(screen.getByTestId("loadingModal")).toBeDefined();
  });

  test("Should be visible if open", () => {
    render(<LoadingModal isOpen={true} />);

    expect(screen.getByTestId("loadingModal").style.visibility).toEqual("");
  });

  test("Should be hidden if not open", () => {
    render(<LoadingModal isOpen={false} />);

    expect(screen.getByTestId("loadingModal").style.visibility).toEqual(
      "hidden"
    );
  });
});
