// T =O(n)
const moveZeroesToTheRight = (nums) => {
    const arrLength = nums.length 
    if(arrLength === 1) {
        return nums
    }
    let countOfZeroes = 0
    const result = []
    for(let i = 0; i<arrLength; i++){ 
        const number = nums[i]  
        if( number === 0) {
            ++countOfZeroes 
        } else {
            result.push(number) 
        }

    }
    if(countOfZeroes === arrLength) {
        return nums 
    }

    for(let i = 0; i < countOfZeroes; i++){
        result.push(0) 
    }
    return result

}

module.exports = moveZeroesToTheRight