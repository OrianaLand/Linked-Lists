import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Initial list");
console.log(list.toString());

console.log("prepend 'bat'");
list.prepend("bat");
console.log(list.toString());

console.log("List size: ", list.size());
console.log("List head: ", list.head());
console.log("List tail: ", list.tail());
console.log("Node at index 6: ", list.at(5));

console.log("Remove last node: ", list.pop());
console.log(list.toString());

console.log("Does list contains 'cat' ?: ", list.contains("cat"));
console.log("Index of value 'snake': ", list.find("snake"));

console.log("Insert 'mouse' at index 3:");
list.insertAt("mouse", 3);
console.log(list.toString());
console.log("Remove item at index 3: ", list.removeAt(3));
console.log(list.toString());
