
const rotateArray = (nums, k) => {
  const numsLength = nums.length
  if(numsLength === 1) return nums
  const newPositionsValues = {}
  const result = [];
  
  for(let i = 0; i < numsLength; i++){
    const newIndex = i + k
    if(newIndex < numsLength){
        newPositionsValues[newIndex] = nums[i]
    } else {
        const newIndexAfterRotating = newIndex - numsLength
        newPositionsValues[newIndexAfterRotating] = nums[i]
    }
  }
  for(let i = 0; i < numsLength; i++){
      result.push(newPositionsValues[i])
  }
  return result

}

/**
 * this is the actual response,
 * the works case scenario will be with a complexity
 * time of O(n-k%n) = O(n)
 */
 var rotate = function(nums, k) {
  let steps = k % nums.length
  if(!steps) return
  for(let i = 0; i < steps; i++){
      nums.unshift(nums.pop())
  }
};

module.exports = rotateArray