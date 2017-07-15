function Node(element) {
  this.element = element;
  this.next = null;
}

function CircularlyLinkedList() {
  this.head = new Node('head');
  this.head.next = this.head;
}

CircularlyLinkedList.prototype.find = function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

CircularlyLinkedList.prototype.findPrevious = function findPrevious(item) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

CircularlyLinkedList.prototype.insert = function insert(newElement, item) {
  const newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

CircularlyLinkedList.prototype.remove = function remove(item) {
  const prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

CircularlyLinkedList.prototype.display = function display() {
  let currentNode = this.head;
  while(currentNode.next !== null && currentNode.next.element !== 'head') {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
};

const cities = new CircularlyLinkedList();
cities.insert('LA', 'head');
cities.insert('Chicago', 'LA');
cities.insert('NYC', 'Chicago');
cities.remove('Chicago');
cities.display();
