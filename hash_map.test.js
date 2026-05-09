/* hash_map.test.js */
import { HashMap } from "./hash_map.js";

describe("Hash Map test: 0 item on the list", () => {
  let hashmap;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Linked List
    hashmap = new HashMap();
  });

  test("Test hash() with empty list", () => {
    // Hash key must be between 0 and 15
    expect(hashmap.hash("dummy key")).toBeGreaterThanOrEqual(0);
    expect(hashmap.hash("dummy key")).toBeLessThan(16);
  });
  test("Test testCapacity() with empty list", () => {
    expect(hashmap.testCapacity()).toEqual(0);
  });
  test("Test set() with empty list", () => {
    // After value insertion check if it's present on the list
    hashmap.set("pineapple", "yellow");
    expect(hashmap.entries()).toEqual([["pineapple", "yellow"]]);
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
  test("Test remove() when hash map is empty", () => {
    expect(hashmap.remove("dog")).toEqual(false);
  });
  test("Test clear() when hash map is empty", () => {
    hashmap.clear();
    expect(hashmap.entries()).toEqual([]);
  });
  test("Test search('keys') when hash map is empty", () => {
    expect(hashmap.search("keys")).toEqual([]);
  });
  test("Test search('values') when hash map is empty", () => {
    expect(hashmap.search("values")).toEqual([]);
  });
  test("Test search('entries') when hash map is empty", () => {
    expect(hashmap.search("entries")).toEqual([]);
  });
  test("Test keys() when hash map is empty", () => {
    expect(hashmap.keys()).toEqual([]);
  });
  test("Test values() when hash map is empty", () => {
    expect(hashmap.values()).toEqual([]);
  });
  test("Test entries() when hash map is empty", () => {
    expect(hashmap.entries()).toEqual([]);
  });
});

