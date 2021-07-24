


const whichBlockToLive = require('./index')

describe('Which block to Live ?', () => {
    const blocks = [{
        gym: false,
        school: true,
        store:false
    },{
        gym: true,
        school: false,
        store:false
    },{
        gym: true,
        school: true,
        store:false
    },{
        gym: false,
        school: true,
        store:false
    },{
        gym: false,
        school: true,
        store:true
    }]

    const requeriment = ['gym','school','store']
    test('should return a message of any block if the requeriment is empty', () =>{
        expect(whichBlockToLive([], blocks)).toBe('You can live in any block')
    })
    
    test('should return the first block if the requeriments is school only', () =>{
        expect(whichBlockToLive(['school'], blocks)).toBe(0)
    })

    test('should return 3 with the given blocks and requeriment', () =>{
        expect(whichBlockToLive(requeriment, blocks)).toBe(3)
    })
})