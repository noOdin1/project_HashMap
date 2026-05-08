/* hash_map.test.js */
import { HashMap } from "./hash_map.js";

describe("Hash Map test: 0 items on the list", () => {
  let hashmap;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Linked List
    hashmap = new HashMap();
  });
  test("Test length() when hash map is empty", () => {
    expect(hashmap.length()).toEqual(0);
  });
  test("Test has() when hash map is empty", () => {
    expect(hashmap.has("dog")).toEqual(false);
  });
  test("Test get() when hash map is empty", () => {
    expect(hashmap.get("dog")).toEqual(null);
  });
});
