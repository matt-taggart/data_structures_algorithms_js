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

const phoneBook = new Dictionary();

phoneBook.add('Mike', '201-555-1234');
phoneBook.add('Donna', '205-777-2376');
phoneBook.add('Phil', '816-245-9177');
phoneBook.display();
phoneBook.remove('Phil');
phoneBook.display();
