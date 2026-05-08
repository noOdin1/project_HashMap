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

  /* Function to get the value corresponding to the key */
  get(key) {
    let hashkey = this.hash(key);
    console.log(
      "The size of nodes in this bucket is: " + this.list[hashkey].size(),
    );
    if (!(this.list[hashkey].size() > 0)) {
      return undefined;
    }
    let tmpLinkedList = this.list[hashkey];
    for (let i = 1; i <= tmpLinkedList.size(); i++) {
      if (tmpLinkedList.valueAt(i)[0] === key) {
        return tmpLinkedList.valueAt(i)[1];
      }
    }
    // This statement is used when a 'key' is hashed
    // and points to a bucket, but the 'key' is not matched
    // with any of the items in the bucket.
    return null;
  }

}

export { HashMap };
