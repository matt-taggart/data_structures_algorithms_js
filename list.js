function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
}

List.prototype.clear = function clear() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
};

List.prototype.find = function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
};

List.prototype.toString = function toString() {
  return this.dataStore;
};

List.prototype.insert = function insert(element, after) {
  const foundAt = this.find(after);
  if (~foundAt) {
    this.dataStore.splice((foundAt + 1), 0, element);
    this.listSize++;
    return true;
  }
  return false;
};

List.prototype.append = function append(element) {
  this.dataStore[this.listSize++] = element;
};

List.prototype.remove = function remove(element) {
  const foundAt = this.find(element);
  if (~foundAt) {
    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }
  return false;
};

List.prototype.front = function front() {
  this.pos = 0;
};

List.prototype.end = function end() {
  this.pos = this.listSize - 1;
};

List.prototype.prev = function prev() {
  if (this.pos > 0) {
    this.pos--;
  }
};

List.prototype.next = function next() {
  if (this.pos < this.listSize) {
    this.pos++;
  }
};

List.prototype.currPos = function currPos() {
  return this.pos;
};

List.prototype.moveTo = function moveTo(position) {
  this.pos = position;
};

List.prototype.getElement = function getElement() {
  return this.dataStore[this.pos];
};

List.prototype.length = function length() {
  return this.listSize;
};

List.prototype.contains = function contains(element) {
  if (this.find(element)) {
    return true;
  }
  return false;
};

const names = new List();
names.append('Matt');
names.append('Bill');
names.append('Ted');
names.append('Cristina');
names.append('Josh');
names.append('Jesse');

for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

for (names.end(); names.currPos() > 0; names.prev()) {
  console.log(names.getElement());
}
