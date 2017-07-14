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
  this.dataStore = [];
};

function isPalindrome(word) {
  const w = new Stack();
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

function factorial(n) {
  const s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5));
