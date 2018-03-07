'use strict'

class QueueCirc {
  constructor(length) {
    this.data = new Uint8Array(length);
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    if (this.size() === this.data.length) {
      throw 'It is full!';
    }

    if (typeof value !== 'number' || value > 255 || value < 0) {
      throw 'It only accepts numbers from 0 to 255!';
    }

    this.data[this.end] = value;
    this.end = wrapper(++this.end, this.data.length)
  }

  dequeue() {
    if (!this.size()) throw 'It is empty!';

    let removedItem = this.data[this.start];
    this.data[this.start] = undefined;
    this.start = wrapper(++this.start, this.data.length);

    return removedItem;
  }

  size() {
    let counter = 0;

    this.data.forEach(item => {
      if (item) counter++;
    })

    return counter;
  }
}

let wrapper = (num, limit) => num % limit;
