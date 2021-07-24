/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = {
        0:1,
        1:1,
    }
    if(n < 2) return cache[n]
    for(let i = 2; i<=n;i++){
        cache[i] = cache[i-1] + cache[i-2]
    }
    return cache[n]
};

module.exports = climbStairs