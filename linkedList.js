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

  //------- Methods for extra credit -------//
  insertAt(value, index) {
    if (value === null || value === undefined) {
      throw new Error("Cannot insert null or undefined value");
    }

    if (index < 0 || index > this.size) {
      console.error("Index out of bounds");
      return;
    }

    if (typeof index !== "number" || !Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let previous = null;
    let current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }
    newNode.nextNode = current;
    previous.nextNode = newNode;
    this._size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new Error(
        `Index ${index} out of bounds. Must be between 0 and ${this._size - 1}`
      );
    }

    if (typeof index !== "number" || !Number.isInteger(index)) {
      throw new Error("Index must be an integer");
    }

    if (!this._head) {
      throw new Error("Cannot remove from empty list");
    }
    let removedNode;
    //Remove head node
    if (index === 0) {
      removedNode = this._head;
      this._head = this._head.nextNode;
    } else {
      // Remove middle or tail node
      let previous = this._head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.nextNode;
      }
      removedNode = previous.nextNode;
      previous.nextNode = removedNode.nextNode;
    }

    this._size--;
    return removedNode;
  }
}
