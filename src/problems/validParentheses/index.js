class Stack {
    lifoQueue = new Array()
    length = 0
    top(){
        return this.length > 0 ? this.lifoQueue[this.length -1] : null
    }
    push(val){
        this.lifoQueue.push(val)
        this.length++
    }
    pop(){
        if(this.length > 0){
            this.length--
            return this.lifoQueue.pop()
        }
        return false
    }
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1) return false
    const stack = new Stack()
    const closingElements = {
        '}':'{',
        ']':'[',
        ')':'(',
    }
    for(let i = 0; i < s.length; i++){
        const element = s[i]
        if(!!closingElements[element]){
            const stackTop = stack.top()
            if(!stackTop) return false
            const openingElement = closingElements[element]
            if(stackTop !== openingElement) return false
            else stack.pop()
        } else {
            stack.push(element)
        }
    }
    return !stack.top()
};

module.exports = isValid