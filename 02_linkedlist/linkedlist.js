'use strict'

class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    let newNode = new Node(value, this.tail);

    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
  }

  removeTail() {
    if (!this.tail) return;

    let removedValue = this.tail.value;
    this.tail = this.tail.previous;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return removedValue;
  }

  addToHead(value) {
    let newNode = new Node(value, null, this.head);

    if (this.head) this.head.previous = newNode;
    else this.tail = newNode;

    this.head = newNode;
  }

  removeHead() {
    if (!this.head) return;

    let removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.previous = null;
    else this.tail = null;

    return removedValue;
  }

  search(searchingItem) {
    let corrected = isFunc(searchingItem) ? searchingItem :
      function (value) { return searchingItem === value; };

    let currentNode = this.head

    while (currentNode) {
      if (corrected(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;
  }
}

let isFunc = value => typeof value === 'function';
