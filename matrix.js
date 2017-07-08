Array.matrix = function(rows, cols, initial) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    console.log(i)
    let columns = [];
    for (let j = 0; j < cols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

let arr = Array.matrix(5, 5, 0);
console.log(arr);
