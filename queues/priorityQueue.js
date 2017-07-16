const Queue = require('./queue');

function PriorityQueue() {
  this.dataStore = [];
}

PriorityQueue.prototype = Object.create(Queue.prototype);

PriorityQueue.prototype.dequeue = function dequeue() {
  let priority = this.dataStore[0].code;
  for (let i = 1; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < priority) {
      priority = i;
    }
  }
  return this.dataStore.splice(priority, 1);
};

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

const p1 = new Patient('Patricia', 5);
const p2 = new Patient('Roger', 3);
const p3 = new Patient('John', 4);
const p4 = new Patient('Elmer', 1);

const p = new PriorityQueue();
p.enqueue(p1);
p.enqueue(p2);
p.enqueue(p3);
p.enqueue(p4);
console.log(p.dequeue());
