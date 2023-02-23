import { merge } from "../src/merge";

describe("merge", () => {
  it("empty input arrays", () => {
    expect(merge([], [])).toEqual([]);
  });

  it("the second input array is empty", () => {
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("the first input array is empty", () => {
    expect(merge([], [4, 5, 6])).toEqual([4, 5, 6]);
  });

  it("merges two non-empty arrays with equal length", () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("merges two non-empty arrays with unequal length", () => {
    expect(merge([1, 5, 6, 11], [2, 3, 4, 7, 8, 9, 12, 13])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,
    ]);
  });

  it("merges two non-empty arrays with duplicate elements", () => {
    expect(merge([1, 2, 2, 7], [1, 2, 3, 8, 9, 10])).toEqual([
      1, 1, 2, 2, 2, 3, 7, 8, 9, 10,
    ]);
  });
});
