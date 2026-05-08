/* main.js */
import { HashMap } from "./hash_map.js";

const hashmap = new HashMap();

console.log("The start of Hash Map production");
console.log("The hash for 'apple' is:     " + hashmap.hash("apple"));
console.log("The hash for 'banana' is:    " + hashmap.hash("banana"));
console.log("The hash for 'carrot' is:    " + hashmap.hash("carrot"));
console.log("The hash for 'dog' is:       " + hashmap.hash("dog"));
console.log("The hash for 'elephant' is:  " + hashmap.hash("elephant"));
console.log("The hash for 'frog' is:      " + hashmap.hash("frog"));
console.log("The hash for 'grape' is:     " + hashmap.hash("grape"));
console.log("The hash for 'hat' is:       " + hashmap.hash("hat"));
console.log("The hash for 'ice cream' is: " + hashmap.hash("ice cream"));
console.log("The hash for 'jacket' is:    " + hashmap.hash("jacket"));
console.log("The hash for 'kite' is:      " + hashmap.hash("kite"));
console.log("The hash for 'lion' is:      " + hashmap.hash("lion"));

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(typeof hashmap.returnList()[0]);
// console.dir(hashmap.returnList()[0]);

hashmap.set("apple", "red");
hashmap.set("dog", "brown");
hashmap.set("banana", "yellow");
hashmap.set("jacket", "blue");
// console.log("The entry is: " + hashmap.get("apple"));
console.log("'apple' has the value of: " + hashmap.get("apple"));
console.log("'suzuki' has the value of: " + hashmap.get("suzuki"));
console.log("'banana' has the value of: " + hashmap.get("banana"));
console.log("'dog' has the value of: " + hashmap.get("dog"));
// Do not add 'kite' to the hashmap just yet
console.log("'kite' has the value of: " + hashmap.get("kite"));
console.log("The key count in the hash map is now: " + hashmap.length());
