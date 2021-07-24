/**
Given an array of integers nums and an integer target, return 
indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.
 */
module.exports = (nums, target) => {
    const dictionary = {}
    
    for(let i = 0; i < nums.length; i++){
        const number = nums[i]
        const complement = target - number
        if(dictionary.hasOwnProperty(complement)){
            return [dictionary[complement], i]
        } else {
            dictionary[number] = i
        }
    }
    return []
};