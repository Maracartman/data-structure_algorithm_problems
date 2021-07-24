const rotateArray = require('./index')

test('returns [5,6,7,1,2,3,4] when rotateArray is called with input=[1,2,3,4,5,6,7] k=3', () =>{
    expect(rotateArray([1,2,3,4,5,6,7],3)).toEqual([5,6,7,1,2,3,4])
})

test('returns [3,99,-1,-100] when rotateArray is called with input=[-1,-100,3,99] k=2', () =>{
    expect(rotateArray([-1,-100,3,99],2)).toEqual([3,99,-1,-100])
})

test('returns [1] when rotateArray is called with input=[1] k=2', () =>{
    expect(rotateArray([1],2)).toEqual([1])
})