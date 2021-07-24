const climbStairs = require('./index')


it('notify that there is 1 ways to climb a 0 step stair', () =>{
    expect(climbStairs(0)).toEqual(1)
})

it('notify that there is 1 ways to climb a 1 step stair', () =>{
    expect(climbStairs(1)).toEqual(1)
})

it('notify that there is 2 ways to climb a 2 step stair', () =>{
    expect(climbStairs(2)).toEqual(2)
})

it('notify that there is 3 ways to climb a 3 step stair', () =>{
    expect(climbStairs(3)).toEqual(3)
})

it('notify that there is 14930352 ways to climb a 35 step stair', () =>{
    expect(climbStairs(35)).toEqual(14930352)
})