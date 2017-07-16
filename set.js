function Set() {
  this.dataStore = [];
}

Set.prototype.add = function add(element) {
  if (!~this.dataStore.indexOf(element)) {
    this.dataStore.push(element);
    return true;
  }

  return 'Item already added.';
};

Set.prototype.remove = function remove(element) {
  const pos = this.dataStore.indexOf(element);

  if (~pos) {
    this.dataStore.splice(pos, 1);
    return true;
  }

  return 'Item not found';
};

Set.prototype.size = function size() {
  return this.dataStore.length;
};

Set.prototype.union = function union(set) {
  const tempSet = new Set();

  this.dataStore.forEach(v => {
    tempSet.add(v);
  });

  set.dataStore.forEach(v => {
    tempSet.add(v);
  });

  return tempSet;
};

Set.prototype.intersection = function intersection(set) {
  const tempSet = new Set();

  this.dataStore.forEach(v => {
    if (set.contains(v)) {
      tempSet.add(v);
    }
  });

  return tempSet;
};

Set.prototype.subset = function subset(set) {
  if (this.size() > set.size()) {
    return false;
  }

  for (let i = 0; i < this.dataStore.length; i++) {
    if (!set.contains(this.dataStore[i])) {
      return false;
    }
  }

  return true;
};

Set.prototype.difference = function difference(set) {
  const tempSet = new Set();

  this.dataStore.forEach(v => {
    if (!set.contains(v)) {
      tempSet.add(v);
    }
  });

  return tempSet;
};

Set.prototype.contains = function contains(element) {
  if (~this.dataStore.indexOf(element)) {
    return true;
  }

  return false;
};

Set.prototype.show = function show() {
  return this.dataStore;
};

const animals = new Set();
animals.add('monkey');
animals.add('elephant');
animals.add('giraffe');
animals.add('meerkat');
animals.add('baboon');
animals.add('aardvark');
animals.add('kangaroo');

const animals2 = new Set();
animals2.add('monkey');
animals2.add('elephant');
animals2.add('robin');
animals2.add('hummingbird');
animals2.add('dog');
animals2.add('cat');
animals2.add('gerbil');

const animals3 = new Set();
animals3.add('monkey');
animals3.add('elephant');

const animals4 = new Set();
animals4.add('elephant');
animals4.add('racoon');

animals.union(animals2);
animals.intersection(animals2);
animals3.subset(animals2);
animals4.subset(animals3);
animals.difference(animals2);
