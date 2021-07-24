const mergeSort = require('../../algorithms/merge-sort')

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1)  return nums[0]
    const sortedArray = mergeSort(nums)
    for(let i = 0; i<sortedArray.length; i+=2){
        if(i+1 === nums.length) return sortedArray[i]
        else if(sortedArray[i] !== sortedArray[i+1]) return sortedArray[i]
    }
};

module.exports = singleNumber;