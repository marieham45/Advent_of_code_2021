import fs from "fs";

const puzzleInput = fs.readFileSync("Data.txt", "utf8");

const sampleInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1


22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const [numbersSet, boardsSet] = sampleInput.split("\n\n\n");

const numbers = numbersSet.split(",").map(Number);

const getLines = (arr) => {
  return arr
    .map((item) => item.split(" "))
    .map((item) => item.filter((item) => item !== ""))
    .map((item) => item.map(Number));
};

const boards = boardsSet
  .split("\n\n")
  .map((item) => item.split("\n"))
  .map(getLines);

const transpose = (arr) =>
  arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));

const bingo = (arr) => {
  if (arr.find((line) => line.filter((item) => item !== "x").length === 0)) {
    return true;
  } else if (
    transpose(arr).find(
      (line) => line.filter((item) => item !== "x").length === 0
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const markNumbers = (arr, num) => {
  return arr.map((line) =>
    line.map((item) => (item === num ? (item = "x") : (item = item)))
  );
};

/* PART 1 */

const drawAndWin = (arr, nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < arr.length; j++)
      if (!bingo(arr[j])) {
        arr[j] = markNumbers(arr[j], nums[i]);
      } else {
        return (
          arr[j]
            .map((line) => line.filter((item) => item > 0))
            .filter((line) => line.length > 0)
            .map((line) => line.reduce((num, sum) => sum + num, 0))
            .reduce((num, sum) => sum + num, 0) * nums[i - 1]
        );
      }
  }
};

console.log(drawAndWin(boards, numbers));

/* PART 2 */

const drawAndLose = (arr, nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (!bingo(arr)) {
      arr = markNumbers(arr, nums[i]);
    } else {
      return {
        arr: arr
          .map((line) => line.filter((item) => item > 0))
          .filter((line) => line.length > 0)
          .map((line) => line.reduce((num, sum) => sum + num, 0))
          .reduce((num, sum) => sum + num, 0),
        lastNum: nums[i - 1],
        lastNumIndex: i - 1,
      };
    }
  }
};

const markedBoards = boards.map((board) => drawAndLose(board, numbers));

const findTheLoser = (obj) => {
  let max = 0;
  let result = 0;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].lastNumIndex > max) {
      max = obj[i].lastNumIndex;
      result = obj[i].arr * obj[i].lastNum;
    }
  }
  return result;
};

console.log(findTheLoser(markedBoards));
