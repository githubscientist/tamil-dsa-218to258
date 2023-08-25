// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.tos = -1;
    }

    push(data) {
        // this.items[++this.tos] = data;
        this.items.push(data);
        this.tos++;
    }

    pop() {
        this.items.pop();
        this.tos--;
    }

    peek() {
        if (this.tos !== -1) {
            return this.items[this.tos];
        }
    }

    isEmpty() {
        return this.tos === -1;
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');
    let stack = new Stack();
    
    // Iterate the words array <- word
    for (let word of words) {
        // for every word, 
        // check if the stack is empty
        if (stack.isEmpty()) {
            // true => push the word to the stack
            stack.push(word); 
        } else {
            // false => 
            // compare the word with the tos word
            if (word == stack.peek()) {
                // true => pop the stack
                stack.pop();
            } else {
                // false => push the word to the stack
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});

/*
    Algorithm:
        Using Stack

        Iterate the words array <- word
            for every word, 
                check if the stack is empty
                    true => push the word to the stack
                    false => 
                        compare the word with the tos word
                            true => pop the stack
                            false => push the word to the stack
*/