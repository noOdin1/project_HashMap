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
  test("Test currentCapacity() with empty list", () => {
    expect(hashmap.currentCapacity()).toEqual(0);
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

describe("Hash Map test: 1 item on the list", () => {
  let hashmap;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Linked List
    hashmap = new HashMap();
    hashmap.set("apple", "red");
  });

  test("Test hash() with 1 item on the list", () => {
    // Hash key must be between 0 and 15
    expect(hashmap.hash("dummy key")).toBeGreaterThanOrEqual(0);
    expect(hashmap.hash("dummy key")).toBeLessThan(16);
  });
  test("Test currentCapacity() with 1 item on the list", () => {
    expect(hashmap.currentCapacity()).toEqual(0.0625);
  });
  test("Test set() with 1 item on the list, adding 1 new item", () => {
    // After value insertion check if it's present on the list
    hashmap.set("pineapple", "yellow");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["pineapple", "yellow"],
    ]);
    expect(hashmap.length()).toEqual(2);
  });
  // simulate a collision, 'apple' and 'dog' has the same
  // hash output '2'
  test("Test set() with 1 item on the list, adding 1 new item, collision test", () => {
    // After value insertion check if it's present on the list
    hashmap.set("dog", "brown");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["dog", "brown"],
    ]);
    expect(hashmap.length()).toEqual(2);
    // value of 0.0625 represent 1 bucket with data
    expect(hashmap.currentCapacity()).toEqual(0.0625);
  });
  // test update function for set()
  test("Test set() with 1 item on the list, update existing key with new value", () => {
    // After value insertion check if it's present on the list
    hashmap.set("apple", "brown");
    expect(hashmap.entries()).toEqual([["apple", "brown"]]);
  });
  // test update function for set()
  test("Test set() with 1 item on the list, adding 1 new item, update 2nd/new item", () => {
    // After value insertion check if it's present on the list
    hashmap.set("dog", "brown");
    hashmap.set("dog", "black");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["dog", "black"],
    ]);
    expect(hashmap.length()).toEqual(2);
  });
  test("Test length() when hash map has 1 item", () => {
    expect(hashmap.length()).toEqual(1);
  });
  test("Test has() when hash map has 1 item", () => {
    expect(hashmap.has("apple")).toEqual(true);
  });
  test("Test get() when hash map has 1 item", () => {
    expect(hashmap.get("apple")).toEqual("red");
  });
  test("Test remove() when hash map has 1 item", () => {
    expect(hashmap.remove("apple")).toEqual(true);
  });
  test("Test clear() when hash map has 1 item", () => {
    hashmap.clear();
    expect(hashmap.entries()).toEqual([]);
    expect(hashmap.currentCapacity()).toEqual(0);
  });
  test("Test search('keys') when hash map has 1 item", () => {
    expect(hashmap.search("keys")).toEqual(["apple"]);
  });
  test("Test search('values') when hash map has 1 item", () => {
    expect(hashmap.search("values")).toEqual(["red"]);
  });
  test("Test search('entries') when hash map has 1 item", () => {
    expect(hashmap.search("entries")).toEqual([["apple", "red"]]);
  });
  test("Test keys() when hash map has 1 item", () => {
    expect(hashmap.keys()).toEqual(["apple"]);
  });
  test("Test values() when hash map has 1 item", () => {
    expect(hashmap.values()).toEqual(["red"]);
  });
  test("Test entries() when hash map has 1 item", () => {
    expect(hashmap.entries()).toEqual([["apple", "red"]]);
  });
});

describe("Hash Map test: 2 item on the list", () => {
  let hashmap;
  beforeEach(() => {
    // before each test, reset tmpList to a new empty Linked List
    hashmap = new HashMap();
    hashmap.set("apple", "red");
    hashmap.set("banana", "yellow");
  });

  test("Test hash() with 2 item on the list", () => {
    // Hash key must be between 0 and 15
    expect(hashmap.hash("dummy key")).toBeGreaterThanOrEqual(0);
    expect(hashmap.hash("dummy key")).toBeLessThan(16);
  });
  test("Test expandList() with 2 item on the list", () => {
    // Hash key must be between 0 and 15
    expect(hashmap.length()).toEqual(2);
    expect(hashmap.currentCapacity()).toEqual(0.125);
    hashmap.expandList();
    expect(hashmap.length()).toEqual(2);
    expect(hashmap.currentCapacity()).toEqual(0.0625);
  });
  test("Test currentCapacity() with 2 item on the list", () => {
    expect(hashmap.currentCapacity()).toEqual(0.125);
  });
  test("Test set() with 2 item on the list, adding 1 new item", () => {
    // After value insertion check if it's present on the list
    hashmap.set("pineapple", "yellow");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["pineapple", "yellow"],
      ["banana", "yellow"],
    ]);
    expect(hashmap.length()).toEqual(3);
  });
  // simulate a collision, 'apple' and 'dog' has the same
  // hash output '2'
  test("Test set() with 2 item on the list, adding 1 new item, collision test", () => {
    // After value insertion check if it's present on the list
    hashmap.set("dog", "brown");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["dog", "brown"],
      ["banana", "yellow"],
    ]);
    expect(hashmap.length()).toEqual(3);
    // value of 0.0625 represent 1 bucket with data
    // This value is a measurement of buckets with data / overall buckets
    // Because 'dog' is a collision with 'apple', it will be stored in the same
    // bucket, therefore 'buckets' with data is still 2
    expect(hashmap.currentCapacity()).toEqual(0.125);
  });
  // test update function for set()
  test("Test set() with 2 item on the list, update existing key with new value", () => {
    // After value insertion check if it's present on the list
    hashmap.set("apple", "brown");
    expect(hashmap.entries()).toEqual([
      ["apple", "brown"],
      ["banana", "yellow"],
    ]);
  });
  // test update function for set()
  test("Test set() with 2 item on the list, adding 1 new item, update 2nd/new item", () => {
    // After value insertion check if it's present on the list
    hashmap.set("dog", "brown");
    hashmap.set("dog", "black");
    expect(hashmap.entries()).toEqual([
      ["apple", "red"],
      ["dog", "black"],
      ["banana", "yellow"],
    ]);
    expect(hashmap.length()).toEqual(3);
    expect(hashmap.currentCapacity()).toEqual(0.125);
  });
  test("Test length() when hash map has 2 items", () => {
    expect(hashmap.length()).toEqual(2);
  });
  test("Test has() when hash map has 2 items", () => {
    expect(hashmap.has("apple")).toEqual(true);
  });
  test("Test get() when hash map has 2 items", () => {
    expect(hashmap.get("apple")).toEqual("red");
  });
  test("Test remove() when hash map has 2 items", () => {
    expect(hashmap.remove("apple")).toEqual(true);
  });
  test("Test clear() when hash map has 2 items", () => {
    expect(hashmap.currentCapacity()).toEqual(0.125);
    expect(hashmap.length()).toEqual(2);
    hashmap.clear();
    expect(hashmap.entries()).toEqual([]);
    expect(hashmap.currentCapacity()).toEqual(0);
  });
  test("Test search('keys') when hash map has 2 items", () => {
    expect(hashmap.search("keys")).toEqual(["apple", "banana"]);
  });
  test("Test search('values') when hash map has 2 items", () => {
    expect(hashmap.search("values")).toEqual(["red", "yellow"]);
  });
  test("Test search('entries') when hash map has 2 items", () => {
    expect(hashmap.search("entries")).toEqual([
      ["apple", "red"],
      ["banana", "yellow"],
    ]);
  });
  test("Test keys() when hash map has 2 items", () => {
    expect(hashmap.search("keys")).toEqual(["apple", "banana"]);
  });
  test("Test values() when hash map has 2 items", () => {
    expect(hashmap.search("values")).toEqual(["red", "yellow"]);
  });
  test("Test entries() when hash map has 2 items", () => {
    expect(hashmap.search("entries")).toEqual([
      ["apple", "red"],
      ["banana", "yellow"],
    ]);
  });
});
