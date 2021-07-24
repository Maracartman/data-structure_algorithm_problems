var rob = function(nums) {
    const length = nums.length
    if(length === 1) return nums[0]
    if(length < 3){
        return Math.max(nums[0],nums[1])
    }
    const spoils = new Array(length)
    spoils[0] = nums[0]
    spoils[1] = nums[1]
    spoils[2] = nums[2]+spoils[0]
    for(let i = 3; i < length; i++){
        spoils[i]=nums[i]+Math.max(spoils[i-2],spoils[i-3])
    }
    return Math.max(spoils[length-1],spoils[length-2])
};

module.exports = rob