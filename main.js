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

console.log(typeof hashmap.returnList()[0]);
console.dir(hashmap.returnList()[0]);
