function mergeSort (array) {
    if (array.length === 1) {
      return array
    }
    const middlePoint = Math.floor(array.length/ 2) 
    const left = array.slice(0,middlePoint)
    const right = array.slice(middlePoint)
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  function merge(left, right){
    let l=0, r=0, leftLength = left.length, rightLength = right.length
    let result = []
    while(l < leftLength && r < rightLength) {
        if(left[l] < right[r]){
            result.push(left[l])
            l++
        } else {
            result.push(right[r])
            r++
        }
    }
    result = [...result,...left.slice(l),...right.slice(r)]
    return result
  }

  module.exports = mergeSort