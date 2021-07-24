

/*
* [0,3,4,31], [4,6,30]
* are they sorted? can be empty ?  
*/
const mergeSortedArray = (arr1, arr2) => {
    let mergedArray = []
    let arr1Index = 0
    let arr2Index = 0
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    
    while(arr1Index < arr1Length || arr2Index < arr2Length){
        if(arr1Index === arr1Length){
          mergedArray.push(...arr2.slice(arr2Index))
          break
        } else if(arr2Index === arr2Length){
          mergedArray.push(...arr1.slice(arr1Index))
          break
        } else {
        const value1 = arr1[arr1Index]
        const value2 = arr2[arr2Index]
    
        if(value1 < value2){
            mergedArray.push(value1)
            arr1Index++
        } else {
            mergedArray.push(value2)
            arr2Index++ 
        }
        }
    }
    return mergedArray
    }
    

module.exports = mergeSortedArray
