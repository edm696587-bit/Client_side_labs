let Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};

let linkedlist = function () {
  this.head = null;
  this.tail = null;
};

linkedlist.prototype.add = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};

linkedlist.prototype.pop = function () {
    
  if (this.head === this.tail) {
    let val = this.head.val;
    this.head = null;
    this.tail = null;
    return val;
  }

  let current = this.head;
  while (current.next !== this.tail) {
    current = current.next;
  }

  let val = this.tail.val;
  current.next = null;
  this.tail = current;
  return val;
};


let l = new linkedlist();

l.add(1);
l.add(5);
l.add(11);





