
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  let newMatrix;
  if (arguments.length === 0) {
    newMatrix = [];
  } else if (matrix.length === 0) {
    newMatrix = [];
  } else {
    for (let i = 1; i < matrix.length; i += 2) {
      matrix[i].reverse();
      newMatrix = matrix.flat();
    }

  
  // console.log(newMatrix);
}
  return newMatrix;
}

// console.log(towelSort([
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]))


// console.log(towelSort([]))
// console.log(towelSort())

// node src/index.js