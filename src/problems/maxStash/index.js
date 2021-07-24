const maxStash = (days) => {
    const length  = days.length
    if(length === 1) return 0;
    if(length===2){
        if(days[1] > days[0])
        return days[1] - days[0]
        return 0
    }
    let maxStash = 0
    let min,max;
    const setMaxStashIfApplicable = () => {
        if(min && max) {
        const newStash = max - min
        if(newStash > maxStash) maxStash = newStash
        }
    }
    for(let i=0; i<length;i++){
        const cost = days[i];
        if(!min) min = cost
        else if(cost <= min){
            setMaxStashIfApplicable()
            min = cost
            max = null
        } else if(!max) max = cost
        else if(cost > max) max = cost
    }
    setMaxStashIfApplicable()
    return maxStash

}

module.exports = maxStash