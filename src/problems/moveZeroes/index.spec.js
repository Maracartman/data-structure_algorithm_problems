const moveZeroesToTheRight = require('./index')

test('returns [1,3,12,0,0] when moveZeroesToTheRight is called with the input=[0,1,0,3,12]', () =>{
    expect(moveZeroesToTheRight([0,1,0,3,12])).toEqual([1,3,12,0,0])
})

test('returns [0] when moveZeroesToTheRight is called with the input=[0]', () =>{
    expect(moveZeroesToTheRight([0])).toEqual([0])
})

test('returns [0,0] when moveZeroesToTheRight is called with the input=[0,0]', () =>{
    expect(moveZeroesToTheRight([0,0])).toEqual([0,0])
})