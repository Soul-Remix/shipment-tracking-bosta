import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TimeLineComponent from "../TimeLineComponent";

describe("TimeLineComponent test", () => {
  beforeEach(() => {
    const data: {
      date: Date;
      events: Array<{
        time: Date;
        event: string;
        hub?: string;
      }>;
    } = {
      date: new Date(),
      events: [
        {
          time: new Date(),
          event: "",
          hub: "",
        },
      ],
    };
    render(<TimeLineComponent events={data.events} date={data.date} />);
  });

  test("Should render correctly", () => {
    expect(screen.getByTestId("time-line-component")).toBeDefined();
  });
});
