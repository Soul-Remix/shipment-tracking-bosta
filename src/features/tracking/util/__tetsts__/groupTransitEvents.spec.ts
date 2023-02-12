import { describe, expect, test } from "vitest";
import groupTransitEvents from "../groupTransitEvents";

describe("compareDates test", () => {
  test("return empty array if passed an empty one", () => {
    expect(groupTransitEvents([])).toEqual([]);
  });
});
