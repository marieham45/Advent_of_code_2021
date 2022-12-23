const sampleInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

const reports = sampleInput.split("\n").map(report => report.split(""));


/* PART 1 */

const transpose = (arr) => {
  let newArray = []
  for (let i = 0; i < arr[0].length; i++) {
    let itemArray = []
    for (let j = 0; j < arr.length; j++) {
      itemArray.push(arr[j][i])
    }
    newArray.push(itemArray);
  }
  return newArray
}

const findMostCommonBits = (arr) => {
    const mostCommonBits = transpose(arr).map(line => line.filter(bit => bit === "0").length > line.filter(bit => bit === "1").length ? line = "0" : line = "1")
  return mostCommonBits
}

const binaryToDecimals = (binaryNumber) => {
  const arrayOfDigits = binaryNumber.split("");

  const arrayOfDecimals = arrayOfDigits.reverse().map((digit, i) => digit === "1" ? digit = Math.pow(2, i) : digit = 0);

  return arrayOfDecimals.reduce((num, sum) => sum + num, 0);
}

const gamaRate = findMostCommonBits(reports).join("");

const epsilonRate = gamaRate.split("").map(item => item === "0" ? item = "1" : item = "0").join("")

const powerConsumption = binaryToDecimals(gamaRate) * binaryToDecimals(epsilonRate);

console.log(powerConsumption)

/* PART 2 */

const findMostCommonBits2 = (arr) => {
  
  const mostCommonBits = transpose(arr).map(line => line.filter(bit => bit === "1").length >= line.filter(bit => bit === "0").length ? line = "1" : line = "0")
  return mostCommonBits
}

const findLeastCommonBits2 = (arr) => {
  
  const leastCommonBits = transpose(arr).map(line => line.filter(bit => bit === "0").length <= line.filter(bit => bit === "1").length ? line = "0" : line = "1")
  return leastCommonBits
}

const oxygenFilter = (arr) => {

for (let i = 0; arr.length > 1; i++) {
      arr = arr.filter(line => line[i] === findMostCommonBits2(arr)[i])
}
      return arr[0]
}

const carbonFilter = (arr) => {

for (let i = 0; arr.length > 1; i++) {
      arr = arr.filter(line => line[i] === findLeastCommonBits2(arr)[i])
}
      return arr[0]
}

const oxygenRate = oxygenFilter(reports).join("")
const carbonRate = carbonFilter(reports).join("")

const lifeSupport = binaryToDecimals(oxygenRate) * binaryToDecimals(carbonRate);

console.log(lifeSupport)




