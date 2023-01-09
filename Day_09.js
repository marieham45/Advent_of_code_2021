const sampleInput = `2199943210
3987894921
9856789892
8767896789
9899965678`;


const caves = sampleInput.split("\n").map(cave => cave.split("").map(Number));

/* PART 1 */

const addSurroundings = (arr) => {
  arr.push([]);
  arr.unshift([]);

  for (let i = 0; i < arr[1].length; i++) {
    arr[0].push(Infinity);
    arr[arr.length - 1].push(Infinity)
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].push(Infinity);
    arr[i].unshift(Infinity);
  }

  return arr
}

const cavesPlusSurroundings = addSurroundings(caves);

const findLowestPoint = (arr) => {
  const lowestPoints = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < arr[i][j-1] && arr[i][j] < arr[i][j+1] && arr[i][j] < arr[i-1][j] && arr[i][j] < arr[i+1][j]) {
        lowestPoints.push(arr[i][j])
      }
      
  }
  }
  return lowestPoints.map(point => point + 1).reduce((num, sum) => sum + num)
}

console.log(findLowestPoint(cavesPlusSurroundings));




