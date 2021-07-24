const search = require('./index')

it('returns 4 as index', () =>{
    expect(search([-1,0,3,5,9,12],9)).toBe(4)
})