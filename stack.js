function Stack() {
  this.dataStore = [];
}

Stack.prototype.push = function push(element) {
  this.dataStore[this.dataStore.length] = element;
};

Stack.prototype.pop = function pop() {
  return this.dataStore.pop();
};

Stack.prototype.peek = function peek() {
  return this.dataStore[this.dataStore.length - 1];
};

Stack.prototype.length = function length() {
  return this.dataStore.length;
};

Stack.prototype.clear = function clear() {
  return this.dataStore = [];
};

function isPalindrome(word) {
  let w = new Stack();
  let reverseWord = '';
  for (let i = 0; i < word.length; i++) {
    w.push(word[i]);
  }
  while (w.length() > 0) {
    reverseWord += w.pop();
  }
  return word === reverseWord;
}

isPalindrome('monkey'); //false
isPalindrome('racecar'); //true
