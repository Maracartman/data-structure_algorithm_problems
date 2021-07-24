class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value)
      if(!this.root) this.root = newNode
      else{
        const lookupForNodePosition = (root, node) => {
          if(root.value > node.value){
            if(!root.left) root.left = newNode
            else lookupForNodePosition(root.left,node)
          } else {
            if(!root.right) root.right = node
            else lookupForNodePosition(root.right,node)
          }
        }
        lookupForNodePosition(this.root,newNode)
      }
    }
    lookup(value){
      const lookupValueFromRootNode = (root, v) => {
        if(!root) throw new Error('Couldnt find the value')
        if(root.value === v) return root.value
        else if(v > root.value) return lookupValueFromRootNode(root.right,v)
        else return lookupValueFromRootNode(root.left,v)
      }
      return lookupValueFromRootNode(this.root, value)
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            if(parentNode === null) {
              this.root = currentNode.left;
            } else {
              currentNode.right.left = currentNode.left;
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
    BreadthFirstSearch(){
      let currentNode = this.root;
      let list = [];
      let queue = [];
      queue.push(currentNode);
  
      while(queue.length > 0){
        currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left) {
          queue.push(currentNode.left);
        }
        if(currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return list;
    }
    BreadthFirstSearchR(queue, list) {
      if (!queue.length) {
        return list;
      }
      const currentNode = queue.shift();
      list.push(currentNode.value);
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      
      return this.BreadthFirstSearchR(queue, list);
    }
    DFSInOrder(node = this.root, list = []){
      if(!node) return false;
      if(node.left){
        this.DFSInOrder(node.left, list)
      }
      list.push(node.value)
      if(node.right){
        this.DFSInOrder(node.right, list)
      }
      return list
    }

    DFSPreOrder(node = this.root, list = []){
      if(!node) return false;
      list.push(node.value)
      if(node.left){
        this.DFSPreOrder(node.left, list)
      }
      if(node.right){
        this.DFSPreOrder(node.right, list)
      }
      return list
    }
    DFSPostOrder(node = this.root, list = []){
      if(!node) return false
      if(node.left) this.DFSPostOrder(node.left,list)
      if(node.right) this.DFSPostOrder(node.right,list)
      list.push(node.value)
      return list
    }
  }

  module.exports = BinarySearchTree