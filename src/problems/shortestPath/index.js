


const getKeyFromPoint = (a,b) => `[${a},${b}]`

const canMoveTo = ([a,b], visitedPoints, mazeAnchor, mazeDepth, maze ) => {
    if(visitedPoints[getKeyFromPoint(a,b)]) return false
    if( a < 0 || a > mazeDepth - 1) return false
    if(b < 0 || b > mazeAnchor - 1) return false
    return !maze[a][b]
}

const isTheSamePoint = (point1,point2) => point1[0] == point2[0] && point1[1] == point2[1]

const addPointToVisited = ([a,b], visitedPoint) => ({...visitedPoint, ...{ [getKeyFromPoint(a,b)]: true}})

const moveTo = (point, endingPoint, maze, mazeAnchor, mazeDepth, visitedPoints, routes) => {
    if(isTheSamePoint(point,endingPoint)) {
        routes.push(Object.keys(visitedPoints))
        return
    }
    
    if(canMoveTo([point[0]-1,point[1]],visitedPoints,mazeAnchor,mazeDepth,maze)){ //UP
        moveTo([point[0]-1,point[1]], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([point[0]-1,point[1]], visitedPoints), routes)
    }
    if(canMoveTo([point[0]+1,point[1]],visitedPoints,mazeAnchor,mazeDepth,maze)){ //DOWN
        moveTo([point[0]+1,point[1]], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([point[0]+1,point[1]], visitedPoints), routes)
    }
    if(canMoveTo([point[0],point[1]-1],visitedPoints,mazeAnchor,mazeDepth,maze)){ //LEFT
        moveTo([point[0],point[1]-1], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([point[0],point[1]-1], visitedPoints), routes)
    }
    if(canMoveTo([point[0],point[1]+1],visitedPoints,mazeAnchor,mazeDepth,maze)){ //RIGHT
        moveTo([point[0],point[1]+1], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([point[0],point[1]+1], visitedPoints), routes)
    }
}

/**
 * This is the Brute force version of shortest path
 * the proposite of this is to measure the before and after
 * of the tree data structure knowledge adquisition
 */
const shortestPathBruteForce = (maze,startingPoint,endingPoint) => {
    if(isTheSamePoint(startingPoint,endingPoint)) return 'The starting point and the ending point are the same'
    
    const possibleRoutes = []
    const visitedPoints = { [getKeyFromPoint(...startingPoint)]: true }
    const mazeAnchor = maze[0].length
    const mazeDepth = maze.length
    //UP
    if(canMoveTo([startingPoint[0]-1,startingPoint[1]],visitedPoints,mazeAnchor,mazeDepth,maze)){ 
        moveTo([startingPoint[0]-1,startingPoint[1]], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([startingPoint[0]-1,startingPoint[1]], visitedPoints), possibleRoutes)
    }
    //DOWN
    if(canMoveTo([startingPoint[0]+1,startingPoint[1]],visitedPoints,mazeAnchor,mazeDepth,maze)){ 
        moveTo([startingPoint[0]+1,startingPoint[1]], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([startingPoint[0]+1,startingPoint[1]], visitedPoints), possibleRoutes)
    }
    //LEFT
    if(canMoveTo([startingPoint[0],startingPoint[1]-1],visitedPoints,mazeAnchor,mazeDepth,maze)){ 
        moveTo([startingPoint[0],startingPoint[1]-1], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([startingPoint[0],startingPoint[1]-1], visitedPoints), possibleRoutes)
    }
    //RIGHT
    if(canMoveTo([startingPoint[0],startingPoint[1]+1],visitedPoints,mazeAnchor,mazeDepth,maze)){ 
        moveTo([startingPoint[0],startingPoint[1]+1], endingPoint, maze, mazeAnchor, mazeDepth, addPointToVisited([startingPoint[0],startingPoint[1]+1], visitedPoints), possibleRoutes)
    }

    if(possibleRoutes.length === 0) return possibleRoutes
    if(possibleRoutes.length === 1) return possibleRoutes[0]
    let minorPath = []
    let currentMinorPathAnchor = mazeAnchor * mazeDepth //Pivot: the greates combination possible
    for(let i = 0;i < possibleRoutes.length; i++){
        const pathLength = possibleRoutes[i].length;
        if(pathLength <= currentMinorPathAnchor){
            currentMinorPathAnchor = pathLength
            minorPath = possibleRoutes[i]
        }
    }
    return minorPath;
}

module.exports = {
    shortestPathBruteForce
}