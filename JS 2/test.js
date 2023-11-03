function symmetricDifference(arr1, arr2) {
  const diff1 = arr1.filter((item) => !arr2.includes(item)); //.includes method in JavaScript is used to check if an array includes a specific value.
  const diff2 = arr2.filter((item) => !arr1.includes(item));
  return diff1.concat(diff2); // concat method is  used to merge two or more arrays into a new array. It does not modify the original arrays but instead returns a new array that is the result of combining the elements from the arrays specify.
}

const arr1 = [1, 2, 3];
const arr2 = [5, 2, 1, 4];
const difference = symmetricDifference(arr1, arr2);

console.log(difference); // Output will be [3, 5, 4]
