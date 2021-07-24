const selectionSort = array => {
    const length = array.length
    for(let i = 0; i<length-1;i++){
        let minimumValueIndex = i
        for(let j = i+1; j<length;j++){
            if(array[j] < array[minimumValueIndex]){
                minimumValueIndex = j
            }
        }
        const temp=array[i]
        array[i] = array[minimumValueIndex]
        array[minimumValueIndex] = temp
    }
    return array
}

module.exports = selectionSort