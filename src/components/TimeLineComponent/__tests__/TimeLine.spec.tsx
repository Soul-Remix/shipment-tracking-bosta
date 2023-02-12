import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TimeLineComponent from "../TimeLineComponent";

describe("TimeLineComponent test", () => {
  beforeEach(() => {
    const data = [
      {
        date: new Date(),
        events: [
          {
            time: new Date(),
            event: "",
            hub: "" as undefined | string,
          },
        ],
      },
    ];

    render(<TimeLineComponent events={data} />);
  });

  test("Should render correctly", () => {
    expect(screen.getByTestId("time-line-component")).toBeDefined();
  });
});
