const twoSums = require('./index')

test('returns [0,1] index tuplet for input nums = [2,7,11,15], target = 9', () =>{
    expect(twoSums([2,7,11,15],9)).toEqual([0,1]) 
})

test('returns [1,2] index tuplet for input nums = [3,2,4], target = 6', () =>{
    expect(twoSums([3,2,4],6)).toEqual([1,2]) 
})