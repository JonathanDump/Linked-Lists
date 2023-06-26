class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.head != 0) {
      tmp = this.head;
    }
    this.head = new Node(value);
    this.head.nextNode = tmp;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let count = 0;
    let tmp = this.head;
    // if (this.head === null) {
    //     return 0
    // }
    while (tmp != null) {
      tmp = tmp.nextNode;
      count++;
    }
    return count;
  }

  tail() {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let count = 0;
    let tmp = this.head;
    while (count != index) {
      tmp = tmp.nextNode;
      count++;
    }
    return tmp;
  }

  pop() {
    if (this.head === null) {
      return;
    } else if (this.head === this.tail()) {
      this.head = this.head.nextNode;
    } else {
      let curr = this.head;
      let prev = null;

      while (curr.nextNode != null) {
        prev = curr;
        curr = curr.nextNode;
      }
      prev.nextNode = curr.nextNode;
    }
  }

  contains(value) {
    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let count = 0;
    while (tmp !== null) {
      if (tmp.value === value) {
        return count;
      }
      count++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    let res = '';
    let tmp = this.head;
    while (tmp !== null) {
      res += `( ${tmp.value} )  -> `;
      tmp = tmp.nextNode;
    }
    return (res += `null`);
  }

  insertAt(value, index) {
    if (this.head === null) {
      this.append(value);
    } else if (index > this.size) {
      this.prepend(value);
    } else {
      let newNode = new Node(value);
      let prev = null;
      let curr = this.head;
      let count = 0;

      while (count != index) {
        prev = curr;
        curr = curr.nextNode;
        count++;
      }

      newNode.nextNode = curr;
      prev.nextNode = newNode;
    }
  }

  removeAt(index) {
    if (this.head === null || index > this.size()) {
      return;
    }
    let count = 0;
    let prev = null;
    let curr = this.head;
    let next = null;
    while (count != index) {
      prev = curr;
      curr = curr.nextNode;
      next = curr.nextNode;
      count++;
    }
    curr.nextNode = null;
    prev.nextNode = next;
  }
}

const list = new LinkedList();

list.append('111');
list.append('222');
list.append('333');

console.log(list.size());
console.log(list.tail());
console.log(list.at(2));
list.pop();
list.append('333');
console.log(list.contains('111'));
console.log(list.find('111'));
list.insertAt('444', 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.head);
