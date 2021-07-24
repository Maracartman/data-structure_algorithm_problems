var search = function(nums, target) {
    function chunkedSearch(nums,target,startingIndex = 0){
        const numsLength = nums.length
        if(numsLength === 1){
            if(nums[0] === target) return 0 + startingIndex
            return -1
        }
        const halfIndex = Math.floor(numsLength/2);
        const halfValue = nums[halfIndex]
        if( halfValue === target) return halfIndex + startingIndex
        if(target > halfValue) return chunkedSearch(nums.slice(halfIndex),target,halfIndex + startingIndex)
        return chunkedSearch(nums.slice(0,halfIndex),target,startingIndex)
    }
    return chunkedSearch(nums, target)
};

module.exports = search