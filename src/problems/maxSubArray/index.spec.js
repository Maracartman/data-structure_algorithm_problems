const maxSubArray = require('./index')

test('returns 6 when maxSubArray is called with input=[-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('returns 1 when maxSubArray is called with input=[1]', () => {
    expect(maxSubArray([1])).toBe(1)
})

test('returns 23 when maxSubArray is called with input=[5,4,-1,7,8]', () => {
    expect(maxSubArray([5,4,-1,7,8])).toBe(23)
})