function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');
}

LinkedList.prototype.find = function find(item) {
  let currentNode = this.head;
  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

LinkedList.prototype.findPrevious = function findPrevious(item) {
  let currentNode = this.head;
  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

LinkedList.prototype.insert = function insert(newElement, item) {
  const newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};
LinkedList.prototype.remove = function remove(item) {
  const prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

LinkedList.prototype.display = function display() {
  let currentNode = this.head;
  while(currentNode.next !== null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
};

const cities = new LinkedList();
cities.insert('LA', 'head');
cities.insert('Chicago', 'LA');
cities.insert('NYC', 'Chicago');
cities.remove('Chicago');
cities.display();
