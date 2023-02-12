import { describe, expect, test } from "vitest";
import compareDates from "../compareDates";

describe("compareDates test", () => {
  test("return true if dates are the same day", () => {
    const date1 = new Date("2020-04-04T12:32:13.149Z");
    const date2 = new Date("2020-04-04T12:34:08.167Z");

    expect(compareDates(date1, date2)).toEqual(true);
  });

  test("return false if dates are on different days", () => {
    const date1 = new Date("2020-04-04T12");
    const date2 = new Date("2020-04-08T12");

    expect(compareDates(date1, date2)).toEqual(false);
  });
});
