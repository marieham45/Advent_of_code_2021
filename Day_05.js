const sampleInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const coordinates = sampleInput.split("\n").map(item => item.split(' -> '));

const findCoordinates = (arr) => {
    return arr.map(item => item.split(",")).join(",").split(",").map(Number);
}

const verticalAndHorizontalCoordinates = coordinates.map(findCoordinates).filter(num => num[0] === num[2] || num[1] === num[3]);

const sorting = (line) => {
    if (line[0] === line[2]) {
        if (line[1] > line[3]) {
            line = [line[0], line[3], line[2], line[1]]
        }
    }
    else if (line[1] === line[3]) {
        if (line[0] > line[2]) {
            line = [line[2], line[1], line[0], line[3]]
        }
    }
    return line
}

const lines = (arr) => {
    let diagram = [];
    for (let i = 0; i < 1000; i++) {
        diagram[i] = [];
        for (let j = 0; j < 1000; j++) {
            diagram[i][j] = 0
        }
         }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === arr[i][2]) {
            for (let j = 0; j <= arr[i][3] - arr[i][1]; j++)
            diagram[arr[i][1] +j][arr[i][0]] += 1
        }
        else if (arr[i][1] === arr[i][3]) {
            for (let j = 0; j <= arr[i][2] - arr[i][0]; j++)
            diagram[arr[i][1]][arr[i][0] +j] += 1
        }
    }
    return diagram
}

const diagramWithLines = lines(verticalAndHorizontalCoordinates.map(sorting))

const score = diagramWithLines.map(line => line.filter(num => num >= 2)).filter(line => line.length > 0).map(line => line = line.length).reduce((num, sum) => sum + num, 0)

console.log(score)






