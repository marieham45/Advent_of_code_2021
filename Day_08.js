const sampleInput = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`;


const signalLines = sampleInput.split("\n").map(line => line.split(" | ")).map(arr => arr.map(line => line.split(" ")));

/* PART 1 */

const findDigits = (arr) => {

  let digitsCount = 0;
  
  const easyDigits = arr[0].filter(code => code.length === 2 || code.length === 3 || code.length === 4 || code.length === 7).map(item => item.split("").sort().join(""));
  const output = arr[1].map(item => item.split("").sort().join(""))
  
  for (let i = 0; i < output.length; i++) {
        if (easyDigits.includes(output[i])) {
          digitsCount += 1;
        }
        
  }
      return digitsCount;                      
}

const numberOfEasyDigits = signalLines.map(findDigits).reduce((num, sum) => sum +num);

console.log(numberOfEasyDigits);


/* PART 2 */

const findDigits2 = (arr) => {

  const digits = arr[0].map(item => item.split("").sort().join(""));
  const output = arr[1].map(item => item.split("").sort().join(""))
  
  for (let i = 0; i < output.length; i++) {
    const [one, four, seven, eight] = [digits.filter(code => code.length === 2).join(""),  digits.filter(code => code.length === 4).join(""), digits.filter(code => code.length === 3).join(""), digits.filter(code => code.length === 7).join("")];
    const fourWithoutOne = four.split("").filter(char => char !== one.split("")[0]).filter(char => char !== one.split("")[1]).sort()
        if (digits.includes(output[i])) {
          if (output[i].length === 2) {
            output[i] = "1";
          }
          else if (output[i].length === 3) {
            output[i] = "7";
          }
          else if (output[i].length === 4) {
            output[i] = "4";
          }
          else if (output[i].length === 7) {
            output[i] = "8";
          }
          else if (output[i].length === 6) {
            if (!(output[i].split("").includes(one.split("")[0]) && output[i].split("").includes(one.split("")[1]))) {
              output[i] = "6";
              
            }
            else if (! (output[i].split("").includes(four.split("")[0]) && output[i].split("").includes(four.split("")[1]) && output[i].split("").includes(four.split("")[2]) && output[i].split("").includes(four.split("")[3]))) {
              output[i] = "0";
            }
            else {
              output[i] = "9";
            }
          }
          else if (output[i].length === 5) {
            if (output[i].split("").includes(one.split("")[0]) && output[i].split("").includes(one.split("")[1])) {
              output[i] = "3";
            }
            else if (output[i].split("").includes(fourWithoutOne[0]) && output[i].split("").includes(fourWithoutOne[1])) {
              output[i] = "5";
            }
            else {
              output[i] = "2";
            }          }
          }
  }
      return parseInt(output.join(""))                      
}

const numberOfAllDigits = signalLines.map(findDigits2).reduce((num, sum) => sum + num);

console.log(numberOfAllDigits);
