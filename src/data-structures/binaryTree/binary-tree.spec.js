const  BinarySearchTree  = require('./binary-tree')


describe('Binary Search Tree data structure features',()=>{
    let binarySearchTree;
    
    beforeEach(() => {
        binarySearchTree = new BinarySearchTree()
    })
    describe('construction feature', () => {
        test('construct an initial binary tree with no root node', () =>{
            const binarySearchTree = new BinarySearchTree();
            expect(binarySearchTree.root).toBeNull()
        })
    })
    describe('Insert feature', () =>{
        test('insert a node with value 9 as the root node', () => {
            binarySearchTree.insert(9)

            expect(binarySearchTree.root.value).toBe(9)
        })

        test('inserts 20 to the right of a previous node with value 9',() =>{
            binarySearchTree.insert(9)
            binarySearchTree.insert(20)

            expect(binarySearchTree.root.right.value).toBe(20)
        })

        test('inserts 4 to the left of a previous node with value 9',() =>{
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)

            expect(binarySearchTree.root.left.value).toBe(4)
        })

        test('inserts 170 right to the pre righted inserted node with value 20 (recursive)',() =>{
            binarySearchTree.insert(9)
            binarySearchTree.insert(20)
            binarySearchTree.insert(170)

            expect(binarySearchTree.root.right.right.value).toBe(170)
        })
        test('inserts 1 right to the pre lefted inserted node with value 4 (recursive)',() =>{
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)
            binarySearchTree.insert(1)

            expect(binarySearchTree.root.left.left.value).toBe(1)
        })
    })

    describe('lookup feature', () => {
        beforeEach(() => {
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)
            binarySearchTree.insert(20)
            binarySearchTree.insert(1)
            binarySearchTree.insert(6)
            binarySearchTree.insert(15)
            binarySearchTree.insert(170)
        })

        test('Throws an error when trying to lookup for a value in an empty BST', () => {
            const emptyBinaryTree = new BinarySearchTree()

            expect(()=>{
                emptyBinaryTree.lookup(4)
            }).toThrow('Couldnt find the value')
        })
        test('finds the root node', () => {
            expect(binarySearchTree.lookup(9)).toEqual(9)
        })
        test('finds the number 4 in the binary tree', () => {
            expect(binarySearchTree.lookup(4)).toEqual(4)
        })

        test('finds the number 20 in the binary tree', () => {
            expect(binarySearchTree.lookup(20)).toEqual(20)
        })

        test('finds the number 1 in the binary tree', () => {
            expect(binarySearchTree.lookup(1)).toEqual(1)
        })

        test('finds the number 170 in the binary tree', () => {
            expect(binarySearchTree.lookup(170)).toEqual(170)
        })
    })

    describe('DFS In Order', () => {
        beforeEach(() => {
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)
            binarySearchTree.insert(20)
            binarySearchTree.insert(1)
            binarySearchTree.insert(6)
            binarySearchTree.insert(15)
            binarySearchTree.insert(170)
        })

        test('returns expected value', () => {
            expect(binarySearchTree.DFSInOrder()).toEqual([1,4,6,9,15,20,170])
        })
    })

    describe('DFS Pre Order', () => {
        beforeEach(() => {
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)
            binarySearchTree.insert(20)
            binarySearchTree.insert(1)
            binarySearchTree.insert(6)
            binarySearchTree.insert(15)
            binarySearchTree.insert(170)
        })

        test('returns expected value', () => {
            expect(binarySearchTree.DFSPreOrder()).toEqual([9,4,1,6,20,15,170])
        })
    })

    describe('DFS Post Order', () => {
        beforeEach(() => {
            binarySearchTree.insert(9)
            binarySearchTree.insert(4)
            binarySearchTree.insert(20)
            binarySearchTree.insert(1)
            binarySearchTree.insert(6)
            binarySearchTree.insert(15)
            binarySearchTree.insert(170)
        })

        test('returns expected value', () => {
            expect(binarySearchTree.DFSPostOrder()).toEqual([1,6,4,15,170,20,9])
        })
    })
})