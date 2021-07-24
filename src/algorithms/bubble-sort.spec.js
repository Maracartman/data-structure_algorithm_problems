const bubbleSort = require('./bubble-sort')
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

test('Sort the array', () =>{
    expect(bubbleSort(numbers)).toEqual([0,1,2,4,5,6,44,63,87,99,283])
})