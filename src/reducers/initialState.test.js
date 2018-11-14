import expect from "expect";
import initialState from "./initialState";

describe("Initial State", () => {
  it("should have an empty array of authors", () => {
    expect(initialState.authors).toEqual([]);
  });
  it("should have an empty array of courses", () => {
    expect(initialState.courses).toEqual([]);
  });
  it("should have 0 ajaxCallsInProgress", () => {
    expect(initialState.ajaxCallsInProgress).toEqual(0);
  });
});
