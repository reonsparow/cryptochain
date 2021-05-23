let data = '000123456789';
let difficulty = '3'

// (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

let output1 = data.substring(0,difficulty);
let output2 = '0'.repeat(2);

console.log(output1,output2);