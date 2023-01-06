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

/*
zero = 6;
nine = 6;

one = 2;
four = 4;
seven = 3;
eight = 7;

two = 5;
three = 5;
five = 5;
six = 5;
*/


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



