function HashTable() {
  this.table = {};
}

//Uses Hoerner's method
HashTable.prototype.hash = function hash(element) {
  const H = 37;
  let total = 0;
  for (let i = 0; i < element.split('').length; i++) {
    total += H * total + element.charCodeAt(i);
    total += element.charCodeAt(i);
  }
  return total;
};

HashTable.prototype.showDistribution = function showDistribution() {
  for (let key in this.table) {
    console.log(this.table[key]);
  }
};

HashTable.prototype.put = function put(key, element) {
  let pos = this.hash(key);
  let table = this.table;

  if (!table[pos]) {
    table[pos] = {};
    table[pos][key] = element;
  } else {
    table[pos][key] = element;
  }
};

HashTable.prototype.get = function get(key) {
  let pos = this.hash(key);
  let table = this.table;

  if (!table[pos]) {
    return 'No results found.';
  }

  if (Object.keys(table[pos]).length) {
    for (let chainKey in table[pos]) {
      if (chainKey === key) {
        return table[pos][key];
      }
    }
  }
};

const htable = new HashTable();
htable.put('jim', '201-855-1234');
htable.put('john', '808-722-3356');
htable.put('ddx', '201-234-1156');
htable.get('jim');
htable.get('john');
htable.get('ddx');
htable.showDistribution();
