function integerMoveZero(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

console.log(integerMoveZero([1, 0, 3, 0, 12]));
