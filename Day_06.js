const sampleInput = `3,4,3,1,2`;

const initialState = sampleInput.split(",").map(Number)

const cycle = (arr) => {
    for (let i = 0; i < 80; i++) {
        arr = arr.map(fish => fish -= 1);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === -1) {
                arr[j] = 6;
                arr.push(8)
            
            }
    
   }
  
}
    return arr.length

}
console.log(cycle(initialState))
