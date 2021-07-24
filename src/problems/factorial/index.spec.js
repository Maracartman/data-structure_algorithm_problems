const Module = require('./index')

describe('Iterative factorial test',() => {
	it('returns 24 when the factorial is called with 4 as argument',()=>{
		expect(Module.factorialI(4)).toBe(24)
	})
})

describe('Recursive factorial test',() => {
	it('returns 24 when the factorial is called with 4 as argument',()=>{
		expect(Module.factorialR(4)).toBe(24)
	})
})