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

const score = (arr) => {
  let scoreSummary = 0;
  arr.forEach(item => {
  if (item === ")") {
    scoreSummary += 3
  }
  else if (item === "]") {
    scoreSummary += 57
  }
  else if (item === "}") {
    scoreSummary += 1197
  }
  else {
    scoreSummary += 25137
  }
})
  return scoreSummary
}

const incorrectScore = score(incorrectClosings)
  
  

console.log(incorrectScore)







