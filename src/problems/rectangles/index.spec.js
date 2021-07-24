
const getAreaOfOverlapedRectangle = require('./index')
const Point = require('./Point')


describe('Non valid rectangle coordinates', () => {
    test('rectangle1 right point is more at the left than the left point', () =>{
        const r1 = {
            left: new Point(0,0),
            right: new Point(-1,2)
        }

        const r2 = {
            left: new Point(3,0),
            right: new Point(5,2)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('A rectangle has invalid points definition')
    })

    test('rectangle1 right point is below the left point', () =>{
        const r1 = {
            left: new Point(0,0),
            right: new Point(2,-2)
        }

        const r2 = {
            left: new Point(3,0),
            right: new Point(5,2)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('A rectangle has invalid points definition')
    })
})

describe('Non overlaped rectangle validation', () =>{

    test('reports that the rectangles are not overlaped when r1 are at the left of r2',() =>{
        const r1 = {
            left: new Point(0,0),
            right: new Point(2,2)
        }

        const r2 = {
            left: new Point(3,0),
            right: new Point(5,2)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('The rectangles are not overlaped')
    })

    test('reports that the rectangles are not overlaped when r2 are at the left of r1',() =>{
        const r1 = {
            left: new Point(3,0),
            right: new Point(5,2)
        }

        const r2 = {
            left: new Point(0,0),
            right: new Point(2,2)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('The rectangles are not overlaped')
    })

    test('reports that the rectangles are not overlaped when r1 is above r2',() =>{
        const r1 = {
            left: new Point(0,0),
            right: new Point(3,2)
        }

        const r2 = {
            left: new Point(0,3),
            right: new Point(3,5)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('The rectangles are not overlaped')
    })

    test('reports that the rectangles are not overlaped when r2 is above r1',() =>{
        const r1 = {
            left: new Point(0,3),
            right: new Point(3,5)
        }

        const r2 = {
            left: new Point(0,0),
            right: new Point(3,2)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe('The rectangles are not overlaped')
    })

})

describe('Overlaped rectangle common area calculation', () => {
    test('returns 4 as the are of the provided overlaped rectangle', () => {
        const r1 = {
            left: new Point(0,0),
            right: new Point(4,4)
        }

        const r2 = {
            left: new Point(2,2),
            right: new Point(5,4)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe(4)
    })

    test('returns 3 as the are of the provided overlaped rectangle', () => {
        const r1 = {
            left: new Point(-5,4),
            right: new Point(-1,6)
        }

        const r2 = {
            left: new Point(-4,3),
            right: new Point(1,5)
        }

        expect(getAreaOfOverlapedRectangle(r1,r2)).toBe(3)
    })
})