const rob = require('./index')


it('robs 12 with these houses', ()=> {
    expect(rob([2,7,9,3,1])).toBe(12)
})

it('robs 4 with these houses', ()=> {
    expect(rob([2,1,1,2])).toBe(4)
})