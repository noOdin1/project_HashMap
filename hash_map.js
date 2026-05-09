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

  /**
   * Function to store the [key, value] pair on the hash map
   * Although not specified, this function will call hash()
   * function to create a hash entry.
   **/
  set(key, value) {
    let hashkey = this.hash(key);
    let entry = [key, value];

    /* this would only trigger if the key exists */
    if (this.has(key)) {
      // update the key
      let tmpLinkedList = this.list[hashkey];
      for (let i = 1; i <= tmpLinkedList.size(); i++) {
        if (tmpLinkedList.valueAt(i)[0] === key) {
          tmpLinkedList.changeValueAt(i, entry);
        }
      }
    } else {
      /* This part executes if the key does not exists */
      this.list[hashkey].append(entry);
      this.keyCount++;
    }
  }

  /* Function to get the value corresponding to the key */
  get(key) {
    let hashkey = this.hash(key);
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

  /* Function to check if the hash map contains the key */
  has(key) {
    let hashkey = this.hash(key);
    if (!(this.list[hashkey].size() > 0)) {
      return false;
    }
    let tmpLinkedList = this.list[hashkey];
    for (let i = 1; i <= tmpLinkedList.size(); i++) {
      if (tmpLinkedList.valueAt(i)[0] === key) {
        return true;
      }
    }
    return false;
  }

}

export { HashMap };
