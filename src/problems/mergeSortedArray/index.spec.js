const mergeSortedArray = require('./index')


test('returns [0,3,4,4,6,30,31] when  mergeSortedArray is called with arr1=[0,3,4,31], arr2=[4,6,30]', () =>{
    expect(mergeSortedArray([0,3,4,31],[4,6,30])).toEqual([0,3,4,4,6,30,31]) 
})