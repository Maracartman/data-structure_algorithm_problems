const Stack = require('./stack')


describe('Push feature',() => {
    let myStack

    beforeEach(() => {
        myStack = new Stack()
    })

    it('set the top element as google when the push is called with it', () => {
      myStack.push('google')
      expect(myStack.top.value).toEqual('google')  
    })

    it('returns the pushed node', () => {
        const result = myStack.push('google')
        expect(result).toEqual({
            value: 'google',
            next: null
        }) 
    })

    it('adds 1 to the length when a value is pushed to the stack', () => {
        myStack.push('google')
        expect(myStack.length).toBe(1) 
        myStack.push('youtube')
        expect(myStack.length).toBe(2) 
    })
})
describe('Peek feature', () =>{
    let myStack

    beforeEach(() => {
        myStack = new Stack()
    })
    it('returns null if i try to peek an empty stack', () => {
        expect(myStack.peek()).toBe(null)
    })

    it('returns node with google value if the stack contains google at the top of it', () => {
        myStack.push('google')
        expect(myStack.peek().value).toEqual('google')
    })
})

describe('Pop feature', () => {
    let myStack

    beforeEach(() => {
        myStack = new Stack()
    })
    it('pops the node google when the pop is called', () => {
        myStack.push('google')
        expect(myStack.peek().value).toBe('google')
        myStack.pop()
        expect(myStack.peek()).toBe(null)
    })

    it('returns youtube when the "youtube" and "google", are pushed but the peek method as been called once', () =>{
        myStack.push('youtube')
        myStack.push('google')
        expect(myStack.peek().value).toBe('google')
        myStack.pop()
        expect(myStack.peek().value).toBe('youtube')
    })

    it('does not do anything if the stack is empty', () => {
        expect(myStack.pop()).toBeUndefined()
    })
    it('returns the poped node', () => {
        myStack.push('youtube')
        myStack.push('google')
        const popResult = myStack.pop()
        expect(popResult).toEqual('google') 
    })

    it('decreses the length of the stack content when the pop occurs', () => {
        myStack.push('youtube')
        myStack.push('google')
        myStack.pop()
    
        expect(myStack.length).toBe(1)
    })
})