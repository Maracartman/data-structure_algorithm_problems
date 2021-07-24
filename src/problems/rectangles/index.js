const Point = require('./Point')


const isAValidRectangle = (r1) => r1.left.x < r1.right.x && r1.left.y < r1.right.y

const getRectangleFromOverlapedRectangles = (r1,r2) => {
    return {
        left: new Point(
            Math.max(r1.left.x, r2.left.x),
            Math.max(r1.left.y, r2.left.y)
        ),
        right: new Point(
            Math.min(r1.right.x, r2.right.x),
            Math.min(r1.right.y, r2.right.y)
        )
    }
}

const getAreaFromRectangle = r => {
    return Math.abs(r.right.x - r.left.x) * Math.abs(r.right.y - r.left.y)
}
/**
 * 
 * @param {Object{left:Point,right:Point}} r1 
 * @param {Object{left:Point,right:Point} r2 
 */
const getAreaOfOverlapedRectangle = (r1,r2) => {
    if(!isAValidRectangle(r1) || !isAValidRectangle(r2)){
        return 'A rectangle has invalid points definition'
    }
    if(r2.left.x >= r1.right.x || r1.left.x >= r2.right.x) {
        return 'The rectangles are not overlaped'
    }

    if(r2.left.y >= r1.right.y || r1.left.y >= r2.right.y){
        return 'The rectangles are not overlaped'
    }

    const r3 = getRectangleFromOverlapedRectangles(r1,r2)
    return getAreaFromRectangle(r3)
}


module.exports = getAreaOfOverlapedRectangle;