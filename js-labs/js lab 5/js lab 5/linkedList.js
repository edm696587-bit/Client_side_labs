let Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};

let LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.add = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.pop = function () {
    
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


let l = new LinkedList();

l.add(10);
l.add(20);
l.add(30);

console.log(l.pop()); 
console.log(l.pop());
console.log(l.pop());

