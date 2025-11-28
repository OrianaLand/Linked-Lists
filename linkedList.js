import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this._head = null; // first node
    this._size = 0;
  }

  append(value) {
    if (!value) {
      throw new Error("undefined value can not be added");
    }

    const newNode = new Node(value);

    if (!this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
    this._size++;
  }

  prepend(value) {
    if (!value) {
      throw new Error("undefined value can not be added");
    } else {
      const newNode = new Node(value);

      //New node points to current head
      newNode.nextNode = this._head;

      //Update head to new node
      this._head = newNode;
      this._size++;
    }
  }

  size() {
    return this._size;
  }

  head() {
    return this._head;
  }

  tail() {
    if (!this._head) return null; // Handle empty list
    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    //Zero based index list
    if (!this._head) return null;
    if (index < 0 || index >= this._size) return null;

    let current = this._head;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this._head) return null;

    //Single node case
    if (!this._head.nextNode) {
      const removedNode = this._head;
      this._head = null;
      this._size--;
      return removedNode;
    }

    let previous = null;
    let current = this._head;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this._size--;
    return current;
  }

  contains(value) {
    if (!value) {
      throw new Error("undefined value can not be searched");
    }

    let current = this._head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (!value) {
      throw new Error("undefined value can not be searched");
    }

    let current = this._head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this._head;
    let result = "";

    while (current) {
      result += `( ${current.value} )` + (current.nextNode ? " → " : " → null");
      current = current.nextNode;
    }
    return result || "Empty list";
  }
}
