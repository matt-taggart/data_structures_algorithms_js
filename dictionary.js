function Dictionary() {
  this.dataStore = {};
}

Dictionary.prototype.add = function add(key, value) {
  this.dataStore[key] = value;
};

Dictionary.prototype.find = function find(key) {
  return this.dataStore[key];
};

Dictionary.prototype.remove = function find(key) {
  delete this.dataStore[key];
};

Dictionary.prototype.display = function display() {
  Object.keys(this.dataStore).forEach(v => {
    console.log(this.dataStore[v]);
  });
};

Dictionary.prototype.clear = function clear() {
  this.dataStore = {};
}

Dictionary.prototype.sort = function sort() {
  const items = Object.keys(this.dataStore);
  return items.sort();
};

const phoneBook = new Dictionary();

phoneBook.add('Mike', '201-555-1234');
phoneBook.add('Donna', '205-777-2376');
phoneBook.add('Phil', '816-245-9177');
phoneBook.remove('Phil');
// phoneBook.display();
phoneBook.add('Humphrey', '855-444-1234');
phoneBook.sort();
