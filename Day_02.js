const sampleInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const commands = sampleInput.split("\n").map(command => command.split(" "))

/* PART 1 */

const finalPosition = (arr) => {
  let horizontalPosition = 0;
  let depth = 0;

  arr.forEach(item => {
    item[0] === "forward" ? horizontalPosition += parseInt(item[1]) : item[0] === "down" ? depth += parseInt(item[1]) : depth -= parseInt(item[1])
  })

  return horizontalPosition * depth
}

console.log(finalPosition(commands))

/* PART 2 */

const finalPositionWithAim = (arr) => {
  let aim = 0;
  let horizontalPosition = 0;
  let depth = 0;

  arr.forEach(item => {
    if (item[0] === "forward") {
      horizontalPosition += parseInt(item[1]);
      depth += aim * parseInt(item[1])
    }
    else if (item[0] === "down") {
      aim += parseInt(item[1])
    }
    else {
      aim -= parseInt(item[1])
    }
  })

  return horizontalPosition * depth
}

console.log(finalPositionWithAim(commands))
