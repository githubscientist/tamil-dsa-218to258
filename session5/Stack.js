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

module.exports = Stack;