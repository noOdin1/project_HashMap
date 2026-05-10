<h1>Project Hash Map - TOP JS Path 80%</h1>

This project will implement another common data structure, Hash Map.<br>

<h3>The objectives for this project:</h3>

| Project Objectives                                                                                                            |          status           |
| ----------------------------------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. :warning: There must be an explicit check on these data<br>&emsp; structure implementation. The boundaries for storage must be enforced.<br>                               | [done] :white_check_mark: |
| 2. Create a class/factory called Hash Map                                                                                     | [done] :white_check_mark: |
| &emsp;&emsp;'load factor' as a variable to be present in HashMap,<br>&emsp;&emsp; load factor of 0.75 with capacity<br>       | [done] :white_check_mark: |
| &emsp;&emsp;'capacity' as a variable to be present in HashMap,<br>&emsp;&emsp; initial capacity of 16                         | [done] :white_check_mark: |
| 3. function hash(key) - Function that will take in a string and returns a hash.<br>                                           | [done] :white_check_mark: |
| 4. function set(key, value), where key and value is the entry<br>&emsp;to the hash map. These hash map entry can be replaced with the same key value.                                | [done] :white_check_mark: |
| 5. function get(key) returns a value associated with that key<br>                                                             | [done] :white_check_mark: |
| 6. function has(key) returns true or false, whether that key is on<br>&emsp;the hash map.                                     | [done] :white_check_mark: |
| 7. function remove(key) takes the key and removes the matching key on<br>&emsp;the hash map.                                  | [done] :white_check_mark: |
| 8. function length() returns the total number of entries in<br>&emsp;the hash map.                                            | [done] :white_check_mark: |
| 9. function clear() removes all entries in the Hash Map<br>&emsp;                                                             | [done] :white_check_mark: |
| 10. function keys() returns an array with all the keys<br>&emsp;&ensp;on the hash map.                                        | [done] :white_check_mark: |
| 11. function values() returns an array with all the values<br>&emsp;&ensp;on the hash map.                                    | [done] :white_check_mark: |
| 12. function entries() returns an array with all the<br>&emsp;&ensp;[key, values] pair on the hash map.                       | [done] :white_check_mark: |

<h3>Hash Map Design</h3>
The objectives outline by TOP will determine what are the Hash Map's main functions.<br> 
Aside from these functions by TOP, I have decided to add the following:<br>
1. Each 'bucket' in the Hash Map points to a Linked List, from previous [link list](https://github.com/noOdin1/project_linked_list) project<br> 
2. Slight modification to Linked List, extra functions to accomodate for current project demand:<br>
&emsp;&emsp;a. valueAt(index), returns the value pointed to by the index<br>
&emsp;&emsp;b. changeValueAt(index, value), changes the value of the node pointed to by index<br>
