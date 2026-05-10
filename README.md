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

<h3>Hash Map Research</h3>
The objectives outline by TOP will determine what are the Hash Map's main functions.<br> 
The project expects collision to occur but it does not explain how to handle these collision.<br>
After researching this topic on the internet, the following are some of the strategies used to<br>
resolve collisions:<br>
1. Open Hashing<br>
&emsp;&emsp;a. Linked List chaining<br> 
&emsp;&emsp;&emsp;When a collision occurs, the new key-value pair is simply appended to the list<br>
&emsp;&emsp;&emsp;at the corresponding index.<br>
&emsp;&emsp;b. Tree Based chaining<br> 
&emsp;&emsp;&emsp;To improve performance from O(N) to O(log N) in the case of many<br>
&emsp;&emsp;&emsp;collisions, some implementations (like Java 8+ HashMap) use balanced<br>
&emsp;&emsp;&emsp;red-black trees instead of linked lists when a bucket's entry count exceeds<br>
&emsp;&emsp;&emsp;a certain threshold.<br>
2. Closed Hashing, <a href="https://www.youtube.com/watch?v=mFY0J5W8Udk">for some explanation on this matter</a><br>
&emsp;&emsp;a. Linear Probing<br> 
&emsp;&emsp;&emsp;This involves sequentially searching for the next empty slot (i+1, i+2,...).<br>
&emsp;&emsp;b. Quadratic Probing<br>
&emsp;&emsp;&emsp;Uses a quadratic formula (i + 1^2, i + 2^2,...) to probe, reducing clustering.<br>
&emsp;&emsp;c. Double Hashing<br>
&emsp;&emsp;&emsp;Employs a second hash function for probe intervals, reducing clustering further.<br>
3. Dynamic Resizing<br>
&emsp;To maintain O(1) performance, the table increases its capacity and rehashes existing<br>
&emsp;elements when the load factor becomes too high.<br>
For this project I've decided to use Open Hashing approach, Linked List from previous project.<br>
Each [key, value] pair inserted in the map will occupy a space on the bucket. Each bucket is a<br>
Linked List Object. I have decided that this will be the criteria for my project because<br> 
it is mentioned that the project needs to handle collision. The items with collision will still<br>
be stored and the map has the ability to update the value if it is found with the same key but<br>
different value. One of the project requirement is to expand the Hash Map when it has reached a<br>
capacity or load of 0.75.<br> 
<hr>
<h3>Hash Map Design</h3>
Aside from these functions by TOP, I have decided to add the following:<br>
1. Each 'bucket' in the Hash Map points to a Linked List, from previous <a href="https://github.com/noOdin1/project_linked_list">linked list</a> project.<br>
&emsp;Open hashing technique.<br>
2. Slight modification to Linked List, extra functions to accomodate for current project demand:<br>
&emsp;&emsp;a. valueAt(index), returns the value pointed to by the index<br>
&emsp;&emsp;b. changeValueAt(index, value), changes the value of the node pointed to by index<br>
<hr>
<h3>Testing the Hash Map</h3>

| Test Suite                                                                                  |                 status                 |
| ------------------------------------------------------------------------------------------- | :------------------------------------: |
| 1. Test all the methods/functions in HashMap class with empty list.<br>                     |       [done] :white_check_mark:        |
| 2. Test all the methods/functions in HashMap class with list containing 1 item only.<br>    |       [done] :white_check_mark:        |
| 3. Test all the methods/functions in HashMap class with list containing 2 item only.<br>    |       [done] :white_check_mark:        |
| 4. Test conditions where HashMap reached capacity and expand to accomodate new items.<br>   |       [done] :white_check_mark:        |


