// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findAdjIndexes(words) {
    for (let index = 0; index < words.length-1; index++){
        if (words[index] === words[index + 1]) {
            return index;
        }
    }
    return -1;
}

inp.on("close", () => {
    let words = userInput[0].split(' ');
    
    let index = 0;
    let adjIndex;
    do {
        adjIndex = findAdjIndexes(words);

        if (adjIndex != -1) {
            // do the deletion
            words.splice(adjIndex, 2);
        }
    } while (adjIndex != -1);
    
    if (words.length > 0) {
        console.log(words.join(' '));
    } else {
        console.log(-1);
    }
});