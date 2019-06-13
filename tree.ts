export class BinaryTreeNode {

  value : any;
  left:any;
  right:any;

  constructor(value) {
      // Value which our beloved node represents.
      this.value = value;
      // Reference of the left child.
      this.left = null;
      // Reference of the right child.
      this.right = null;
  }
}

export const traverseInorder = (root) => {
  
  if (root === null) {
    return;
  }
  
  // Traverse the left node.
  traverseInorder(root.left);
  
  // Print root node's value.
  console.log(root.value);
  
  //Traverse the right node.
  traverseInorder(root.right);
};

export const traversePreOrder = (root) => {
  if (root === null) {
    return;
  }
  // Print root node's value.
  console.log(root.value);
  // Traverse the left node.
  traversePreOrder(root.left);
  //Traverse the right node.
  traversePreOrder(root.right);
};

export const traversePostOrder = (root) => {
  if (root === null) {
    return;
  }
  // Traverse the left node.
  traversePostOrder(root.left);
  //Traverse the right node.
  traversePostOrder(root.right);
  // Print root node's value.
  console.log(root.value);
};


//Next one is the BFS

export const levelOrder = (root) => {
  if (root === null) {
    return;
  }
  
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    // pirnt/explore node.
    console.log(node.value);
    // enqueue left
    if (node.left !== null) {
      queue.push(node.left);
    }
    // enqueue right.
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

export const createTree = (array) => {
  if (!array.length) {
    return null;
  }
  const nodes = array.map(
    (value) => (value !== null ? new BinaryTreeNode(value) : null)
  );
  nodes.forEach((node, index) => {
    if (node === null) {
      return;
    }
    const doubleOfIndex = 2 * index;
    // Left node -> (2 * i) + 1.
    const lIndex = doubleOfIndex + 1;
    if (lIndex < array.length) {
      node.left = nodes[lIndex];
    }
    // Right node -> (2 * i) + 2.
    const rIndex = doubleOfIndex + 2;
    if (rIndex < array.length) {
      node.right = nodes[rIndex];
    }
  });
  return nodes[0];
}

export const insertInLevelOrder = (root, value) => {
  const node = new BinaryTreeNode(value);
  if (root === null) {
    return node;
  }
  const queue = [root];
  while (queue.length){
    const _node = queue.shift();
    if (_node.left === null) {
      _node.left = node;
      break;
    }
    queue.push(_node.left);
    if (_node.right === null) {
      _node.right = node;
      break;
    }
    queue.push(_node.right);
  }
  return root;
}

export const remove = (root, value) => {
  if (root === null) {
    return null;
  }
  if (root.value === value) {
    return null;
  }
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    
    // If target is on left of parent.
    if (node.left && node.left.value === value) {
      node.left = null;
      return root;
    }
    queue.push(node.left);
    
    // If target is on right of parent.
    if (node.right && node.right.value === value) {
      node.right = null;
      return root;
    }
    queue.push(node.right);
    
  }
  return root;
};