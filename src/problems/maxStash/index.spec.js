const maxStash = require(".")

describe('Max stash test cases',() => { 
    it('returns no stash if there is only one day', () => {
        expect(maxStash([1])).toEqual(0)
    })

    it('returns 15 if there is only two days and there is a stash', () => {
        expect(maxStash([1,16])).toEqual(15)
    })

    it('returns 0 if there is only two days and there is no viable stash', () => {
        expect(maxStash([16,1])).toEqual(0)
    })

    it('returns 25 buying at 4th day and selling at 8th day', () => {
        expect(maxStash([7,2,5,1,4,10,5,15,26,24,22,10])).toEqual(25)
    })

    it('18', () => {
        expect(maxStash([20,19,10,12,5,23,9,1,2,10,12,14,7,8,12,5,5,5,3,4,2,1,1])).toEqual(18)
    })
})