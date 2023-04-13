/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) throw new Error("LIST IS EMPTY");
    let curVal = this.head;
    let preVal = null;
    while (curVal.next) {
      preVal = curVal;
      curVal = curVal.next;
    }
    const last = curVal;
    if (preVal) preVal.next = null;
    this.tail = preVal;
    this.length--;
    if (this.length === 0) this.head = null;
    return last.val;
  }

  // /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error("LIST IS EMPTY");
    const first = this.head;
    this.head = first.next;
    if (!this.head) this.tail = null;
    this.length--;
    return first.val;
  }

  // /** getAt(idx): get val at idx. */

  getAt(idx) {
    let index = 0;
    let curVal = this.head;
    while (index !== idx) {
      index++;
      curVal = curVal.next;
    }
    return curVal.val;
  }

  // /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const node = new Node(val);
    if (idx >= this.length) throw new Error("invalid index");
    let index = 0;
    let curVal = this.head;
    let preVal;
    while (index !== idx) {
      index++;
      preVal = curVal;
      curVal = curVal.next;
    }
    node.next = curVal.next;
    curVal = node;
    if (preVal) preVal.next = curVal;
    if (index === 0) this.head = curVal;
  }

  // /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) throw new Error("invalid index");
    const node = new Node(val);
    let index = 0;
    let prevVal;
    let curVal = this.head;
    while (index !== idx) {
      index++;
      prevVal = curVal;
      curVal = curVal.next ? curVal.next : null;
    }
    if (prevVal) prevVal.next = node;
    node.next = curVal;
    if (index === this.length) this.tail = node;
    this.length++;
    if (this.length === 1) this.head = node;
  }

  // /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) throw new Error("invalid index");
    let index = 0;
    let prevVal;
    let curVal = this.head;
    while (index !== idx) {
      index++;
      prevVal = curVal;
      curVal = curVal.next;
    }
    if (prevVal) prevVal.next = curVal.next;
    this.length--;
    if (this.length === 0) (this.head = null), (this.tail = null);
  }

  // /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let curVal = this.head;
    while (curVal) {
      sum += curVal.val;
      curVal = curVal.next;
    }
    const result = this.length === 0 ? sum : sum / this.length;
    return result;
  }
}

module.exports = LinkedList;
