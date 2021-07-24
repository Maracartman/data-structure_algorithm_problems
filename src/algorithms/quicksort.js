const orderEnum = {
    ASC: 'asc',
    DESC: 'desc'
}

let quickSort = (arr = [], order = 'asc') => {
    if(arr.length < 2) return arr
    if(!Object.values(orderEnum).includes(order)) throw new Error(`order parameter invalid, expected: ${Object.values(orderEnum).join(', ').trim()}`)
    const pivot = arr[0]
    const minorElements = []
    const mayorElements = []
    for(let i = 1; i < arr.length; i++){
        const element = arr[i]
        if(element <= pivot) minorElements.push(element) 
        else mayorElements.push(element) 
    }
    if(order === orderEnum.ASC) return [...quickSort(minorElements,order),pivot,...quickSort(mayorElements,order)]
    else return [...quickSort(mayorElements,order),pivot,...quickSort(minorElements,order)]
}