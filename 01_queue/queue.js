'use strict'

class Queue {
  constructor () {
    this.list = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue (item) {
    this.list[this.tail++] = item;
  }

  dequeue () {
    if (this.size() === 0) return;

    if (this.head > 99) {
      this.list = this.list.slice(this.head);
      this.head = 0;
      this.tail = this.tail - this.head;
    }

    return this.list[this.head++];
  }

  size () {
    return this.tail - this.head;
  }
}
