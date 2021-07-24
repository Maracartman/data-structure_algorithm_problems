var minCostClimbingStairs = function(cost) {
    const length = cost.length
    const costs = new Array(length)
    costs[0] = cost[0]
    costs[1] = cost[1]
    for(let i = 2; i < cost.length;i++){
        costs[i] = Math.min(cost[i]+costs[i-1], cost[i]+costs[i-2])
    }
    return Math.min(costs[length-1], costs[length-2])
};

module.exports = minCostClimbingStairs