
const getFirstBlockWithLocal = (local, blocks) => {
    let blockIndex = -1
    let index = 0
    while(blockIndex < 0 && index < blocks.length){
        if(blocks[index][local]){
            blockIndex = index
        }
        index++
    }
    return blockIndex
}

const transformBlockToString = (block,dictionary,req) => {
    let string = ''
    req.forEach(local => {
        string += block[local]?dictionary[local] : '-'
    })
    return string
}

const allStorefounded = foundedStore => {
    const storeState = Object.values(foundedStore)
    for(let i = 0; i<storeState.length; i++){
        if(!storeState[i]) return false
    }
    return true
}

const markLocalFoundedIfApplies = (requeriment,dictionary, blocksStringByLocal,foundedLocals, index) => {
    if(requeriment.includes(dictionary[blocksStringByLocal[index]]))
           foundedLocals[dictionary[blocksStringByLocal[index]]] = true
}

const whichBlockToLive = (requeriment, blocks) => {
    if(requeriment.length === 0) return 'You can live in any block'
    if(requeriment.length === 1) return getFirstBlockWithLocal(requeriment[0], blocks)
    const blockSegmentLength = requeriment.length
    const dictionary = {
        gym: 'g',
        school: 's',
        store: 't',
        g: 'gym',
        s: 'school',
        t: 'store',
    }
    let blocksStringByLocal = ''
    
    blocks.forEach(block => {
        blocksStringByLocal += transformBlockToString(block,dictionary,requeriment)
    })
    let currentMinorPathRouteLength = blocksStringByLocal.length + 1
    let minorSubStringIndexTuplet = []
    let foundedLocals = {}
    for(let i = 0; i < blocksStringByLocal.length - blockSegmentLength; i++){
        requeriment.forEach(key => foundedLocals[key] = false)
        markLocalFoundedIfApplies(requeriment,dictionary,blocksStringByLocal,foundedLocals, i)
        let j = i 
        do{
            j++
            markLocalFoundedIfApplies(requeriment,dictionary,blocksStringByLocal,foundedLocals, j) 
        }while(j < blocksStringByLocal.length && !allStorefounded(foundedLocals))
        if(allStorefounded(foundedLocals)){
            if(j-i < currentMinorPathRouteLength){
                minorSubStringIndexTuplet = [i,j]
                currentMinorPathRouteLength = j - i
            }
        }
    }
    const tupletMiddlePoint = (minorSubStringIndexTuplet[1] + minorSubStringIndexTuplet[0]) / 2
    const blockNumber = Math.floor(tupletMiddlePoint / requeriment.length)
    return blockNumber;

}

module.exports = whichBlockToLive