const sampleInput = `16,1,2,0,4,2,7,1,2,14`;

const positions = sampleInput.split(",").map(Number);

const [highest, lowest] = [Math.min(...positions), Math.max(...positions)];

/* PART 1 */

const leastFuel = (arr, max, min) => {
  let minFuel = Infinity;
    for (let i = max; i < min; i++) {
      const fuelSum = arr.map(pos => pos = Math.abs(pos - i)).reduce((num, sum) => sum + num);
      fuelSum < minFuel? minFuel = fuelSum : minFuel;
    }
  return minFuel

}

console.log(leastFuel(positions, highest, lowest))

/* PART 2 */

const adding = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

/*const addRec = (num) => {
  if (num === 0 || num === 1) {
    return num
  }
  else {
    return num + addRec(num -1)
  }
}*/

const leastFuel2 = (arr, max, min) => {
  let minFuel = Infinity;
    for (let i = max; i < min; i++) {
      const fuelSum = arr.map(pos => pos = adding(Math.abs(pos - i))).reduce((num, sum) => sum + num);
      fuelSum < minFuel? minFuel = fuelSum : minFuel;
    }
  return minFuel

}

console.log(leastFuel2(positions, highest, lowest))

