const Stack = require('./Stack');

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();
stack.push(8);
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());