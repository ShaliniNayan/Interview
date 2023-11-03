function integerMoveZero(arr) {
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] === 0) {
  //     arr.splice(i, 1);
  //     arr.push(0);
  //   }
  // }
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      zeroCount++;
      i--;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    arr.push(0);
  }
  return arr;
}

console.log(integerMoveZero([1, 0, 3, 0, 12]));
