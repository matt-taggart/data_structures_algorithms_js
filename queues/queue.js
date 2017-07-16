function Queue() {
  this.dataStore = [];
}

Queue.prototype.enqueue = function enqueue(element) {
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function dequeue() {
  return this.dataStore.shift();
};

Queue.prototype.front = function front() {
  return this.dataStore[0];
};

Queue.prototype.back = function back() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.toString = function toString() {
  return this.dataStore.reduce((prev, curr) => {
    return prev + (curr + '\n');
  }, '');
};

Queue.prototype.empty = function empty() {
  return this.dataStore.length;
};

const q = new Queue();
q.enqueue("Matt");
q.enqueue("Bill");
q.enqueue("Cristi");
q.dequeue();
console.log(q.toString());

module.exports = Queue;
