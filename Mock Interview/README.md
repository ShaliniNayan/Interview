Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.



Example:
const array1 = ['a', 'b'];
const array2 = ['a', 'b', 'c', 'd']; 
// should return ["c", "d"]




Tests arrays: 
const array1 = [1,2,3,4]
const array2 = [1,2,4] 

// [3]

const array1 = [‘f’, ‘k’, ‘l’, ‘n’]
const array2 = [‘f’, ‘m’, ‘n’]

// [‘k’, ‘l’, ‘m’ ]

const array1 = [‘g’, ‘y’, ‘z’]
const array2 = [‘g’, ‘y’, ‘z’]

// []
