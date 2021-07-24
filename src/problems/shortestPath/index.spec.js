const { shortestPathBruteForce } = require('./index')


describe('Brute force shorter path solution', () =>{
    const maze = [
        [0,0,1,0,1],
        [1,0,0,1,0],
        [0,1,0,1,1],
        [1,0,0,0,0],
        [0,0,1,1,0]
    ]

    test('Should inform that the starting and ending point are the same', () => {
        expect(shortestPathBruteForce(maze,[0,0],[0,0])).toBe('The starting point and the ending point are the same')
    }) 
    test('return the expected path', () =>{
        const startingPoint = [0,0]
        const endingPoint = [4,4]
        const result = shortestPathBruteForce(maze,startingPoint,endingPoint)
    
        expect(result).toEqual(['[0,0]','[0,1]','[1,1]','[1,2]','[2,2]','[3,2]','[3,3]','[3,4]','[4,4]'])
    })  
    
    test('Should return an empty array if there is no way to get reach the end', () => {
        const mazeWithNoPath = [
            [0,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,0]
        ]
        expect(shortestPathBruteForce(mazeWithNoPath,[0,0],[4,4])).toEqual([])
    }) 

    test('Should return one of the multiple shorter path', () => {
        const allOpenMaze = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        
        const result = shortestPathBruteForce(allOpenMaze,[0,0],[4,4])
        
        expect(result).toEqual([
            "[0,0]",
            "[0,1]",
            "[0,2]",
            "[0,3]",
            "[0,4]",
            "[1,4]",
            "[2,4]",
            "[3,4]",
            "[4,4]",
          ])
    })
})

