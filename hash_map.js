/* hash_map.js */
import { LinkedList, Node } from "./linked_list.js";

class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.keyCount = 0;
    // prepares a linked list structure for each 'bucket' entry
    this.list = Array.from({ length: this.capacity }, (_, i) => i).map(
      () => new LinkedList(),
    );
  }


  /* Function to produce a hash for the key supplied */
  hash(key) {
    let hashCode = 0;

    const primeNumber = 37;
    for (let i = 0; i < key.length; i++) {
      hashCode = (key.charCodeAt(i) / Math.PI) * primeNumber + hashCode;
    }
    // hashCode = Math.floor(hashCode / primeNumber);
    hashCode = Math.floor((hashCode %= this.capacity));

    return hashCode;
  }
}

export { HashMap };
