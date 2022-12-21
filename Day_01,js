const sampleInput = `199
200
208
210
200
207
240
269
260
263`;


const measurements = sampleInput.split("\n").map(Number)

/* PART 1 */

const numberOfIncrease = measurements.filter((measurement, i, arr) => measurement > arr[i - 1]).length

console.log(numberOfIncrease)

/* PART 2 */

const numberOfIncreaseSumOfThree = measurements.map((measurement, i, arr) => measurement = arr[i-1] + measurement + arr[i+1]).slice(1, -1).filter((measurement, i, arr) => measurement > arr[i - 1]).length

console.log(numberOfIncreaseSumOfThree)
