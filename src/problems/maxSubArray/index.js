const maxSubArray = (nums) => {
 let maxSum = nums[0]
 let currentSum = nums[0]

 for(let i = 1; i < nums.length; i++){
     const num = nums[i]
     currentSum = Math.max(currentSum + num, num)
     maxSum = Math.max(maxSum, currentSum)
 }
 return maxSum
}

module.exports = maxSubArray