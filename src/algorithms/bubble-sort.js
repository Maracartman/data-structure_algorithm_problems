const bubbleSort = (array = []) =>{
    if(!array.length) throw new Error('No empty array')
    if(array.length === 1) return array
    const newArray = [...array]
    let fixedIndex = array.length
    while(fixedIndex > 1){
        for(let i=0;i<fixedIndex-1; i++){
            const j = i+1
            if(newArray[j] < newArray[i]){
                const backup = newArray[i]
                newArray[i] = newArray[j]
                newArray[j] = backup
            }
        }
        fixedIndex--   
    }
    return newArray
}

module.exports = bubbleSort