class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null; //TODO register this value
      this.length = 0;
    }
    peek() {
      return this.top
    }
    push(value){
      const node = new Node(value)
      if(this.top) node.next = this.top
      this.top = node
      this.length++
      return node
    }
    pop(){
      if(!this.top) return
      const oldTop = this.top
      if(this.top.next)
        this.top = this.top.next
      else
        this.top = null
        this.length--
      return oldTop.value
    }
    //isEmpty
  }
  
 module.exports = Stack