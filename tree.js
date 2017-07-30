//nodes - represent the data
//edges - represent the relationships between the data;

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

Node.prototype.show = function show() {
  return this.data;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function insert(data) {
  const newNode = new Node(data);
  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

BST.prototype.insertNode = function insertNode(node, newNode) {
  if (newNode.data < node.data) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
};

BST.prototype.inOrderTraverse = function inOrderTraverse(cb) {
  function inOrderTraverseNode(node, cb) {
    if (node !== null) {
      inOrderTraverseNode(node.left, cb);
      cb(node.data);
      inOrderTraverseNode(node.right, cb);
    }
  }

  inOrderTraverseNode(this.root, cb);
};

BST.prototype.preOrderTraverse = function preOrderTraverse(cb) {
  function preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.data);
      preOrderTraverseNode(node.left, cb);
      preOrderTraverseNode(node.right, cb);
    }
  }

  preOrderTraverseNode(this.root, cb);
};

BST.prototype.postOrderTraverse = function postOrderTraverse(cb) {
  function postOrderTraverse(node, cb) {
    if (node !== null) {
      postOrderTraverse(node.left, cb);
      postOrderTraverse(node.right, cb);
      cb(node.data);
    }
  }

  postOrderTraverse(this.root, cb);
};

BST.prototype.min = function() {
  function minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
        console.log(node);
      }
      return node.data;
    }
    return null;
  }

  return minNode(this.root);
};

BST.prototype.max = function() {
  function maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.data;
    }
    return null;
  }

  return maxNode(this.root);
};

BST.prototype.search = function(key) {
  function searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.data) {
      return searchNode(node.left, key);
    } else if (key > node.data) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }

  return searchNode(this.root, key);
}

BST.prototype.remove = function(key) {
  function removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.data) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = removeNode(node.right, key);
      return node;
    } else { //key is equal to node.key
      //case 1 - a leaf node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //case 2 - a node with only 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      //case 3 - a node with 2 children
    }
  }


  this.root = removeNode(this.root, key);
}

const tree = new BST();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(6);
tree.insert(3);
