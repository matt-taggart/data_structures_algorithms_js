function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  this.head = new Node('head');
}

DoublyLinkedList.prototype.find = function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

DoublyLinkedList.prototype.insert = function insert(newElement, item) {
  const newNode = new Node(newElement);
  let currentNode = this.find(item);
  newNode.next = currentNode.next;
  newNode.previous = currentNode;
  currentNode.next = newNode;
};

DoublyLinkedList.prototype.remove = function remove(item) {
  const currentNode = this.find(item);
  if (currentNode.next !== null) {
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
    currentNode.next = null;
    currentNode.previous = null;
  } else {
    currentNode.previous.next = null;
    currentNode.previous = null;
  }
};

DoublyLinkedList.prototype.findLast = function findLast() {
  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

DoublyLinkedList.prototype.display = function display() {
  let currentNode = this.head;
  while (currentNode.next !== null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
};

DoublyLinkedList.prototype.displayReverse = function displayReverse() {
  let currentNode = this.findLast();
  while (currentNode.previous !== null) {
    console.log(currentNode.element);
    currentNode = currentNode.previous;
  }
};

const cities = new DoublyLinkedList();
cities.insert('LA', 'head');
cities.insert('Chicago', 'LA');
cities.insert('NYC', 'Chicago');
cities.remove('Chicago');
cities.display();
cities.displayReverse();
