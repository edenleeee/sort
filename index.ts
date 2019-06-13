let tdd1 = [-2,-5,78,3,-10,9,15,22];
let tdd2 = [2 , 5 , 100, 500, 22,77,55,332,565,11,56,99,44,43,456];
let tdd3 = [45,422,33,355,6,12,7,99,5576,2345,5678,34523452,4567342,56783,5683,467346584,678346,54673,35456,4456,83,81,9494];

import { Sorter } from './sort';
import {BinaryTreeNode,traverseInorder,traversePreOrder , traversePostOrder, levelOrder, createTree, insertInLevelOrder, remove} from './tree';


const array = [1, 2, 3, 4, 5, 6];
const tree = createTree(array);
console.log(tree);

insertInLevelOrder(tree,15);
console.log(tree);

remove(tree,15);
console.log(tree);



