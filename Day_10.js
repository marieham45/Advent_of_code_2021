const sampleInput = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

const lines = sampleInput.split("\n").map(line => line.split(""));

const closing = [")", "]", "}", ">"]

/* PART 1 */

const findIncorrect = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (closing.includes(arr[i])) {
      if ((arr[i-1] === "(" && arr[i] === ")") || (arr[i-1] === "[" && arr[i] === "]") || (arr[i-1] === "{" && arr[i] === "}") || (arr[i-1] === "<" && arr[i] === ">")) {
        arr.splice(i-1, 2);
        i = 0;
      }
      else {
        return arr[i]
      }
    }
  }
}

const incorrectClosings = lines.map(findIncorrect).filter(item => item !== undefined)

const score1 = (arr) => {
  let score = 0;
  arr.forEach(item => {
  if (item === ")") {
    score += 3
  }
  else if (item === "]") {
    score += 57
  }
  else if (item === "}") {
    score += 1197
  }
  else {
    score += 25137
  }
})
  return score
}

const incorrectScore = score1(incorrectClosings)
  
  
console.log(incorrectScore);


/* PART 2 */

const findIncomplete = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (closing.includes(arr[i])) {
      if ((arr[i-1] === "(" && arr[i] === ")") || (arr[i-1] === "[" && arr[i] === "]") || (arr[i-1] === "{" && arr[i] === "}") || (arr[i-1] === "<" && arr[i] === ">")) {
        arr.splice(i-1, 2);
        i = 0;
      }
      else {
      arr = []
    }
    }
    
  }
          return arr

}


const incompletes = lines.map(findIncomplete).filter(item => item.length > 0);

const getClosings = (arr) => {
  let arrOfClosings = [];
  arr.forEach(item => {
    if (item === "(") {
      arrOfClosings.push(")");
    }
    else if (item === "[") {
      arrOfClosings.push("]")
    }
    else if (item === "{") {
      arrOfClosings.push("}");
    }
    else {
      arrOfClosings.push(">")
    }
  })
  return arrOfClosings
}

const closingsForIncompletes = incompletes.map(getClosings).map(item => item.reverse());

const score2 = (arr) => {
  let score = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ")") {
      score *= 5;
      score += 1;
    }
    else if (arr[i] === "]") {
      score *= 5;
      score += 2;
    }
    else if (arr[i] === "}") {
      score *= 5;
      score += 3;
    }
    else {
      score *= 5;
      score += 4;
    }
  }
  return score
}

const incompleteScores = closingsForIncompletes.map(score2).sort((a, b) => a - b)

const middleScore = incompleteScores[(incompleteScores.length - 1) / 2]

console.log(middleScore)
