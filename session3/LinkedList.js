// let numbers = [3, 6, 4, 2, 1, 5];

// // console.log(numbers);

// // console.log(numbers[2]);

// numbers[4] = 10;

// console.log(numbers);

// let word = 'apple';

// console.log(word);
// console.log(word[4]);

// strings are immutable - non changeables

// word[1] = 'm';

// @index 1 => 'm'
// let index = 1;
// let char = 'n';

// word = word.slice(0, index) + char + word.slice(index + 1,);

// index = 2;
// char = 'k';

// word = word.slice(0, index) + char + word.slice(index + 1,);

// // console.log(word.split(''));
// console.log(word.toUpperCase());

// let numbers = [1, 2, 3, 4, 5];
// let numbers = new Array(1, 2, 3, 4, 5);

// numbers.push(6);
// numbers.pop();
// numbers.pop();

// numbers.unshift(10);
// numbers.unshift(12);
// numbers.shift();
// numbers.shift();
// numbers.shift();

// numbers.splice(2, 0, 6);
// numbers.splice(1, 1);

// console.log(numbers);

// let word = 'apple';
// let word = new String('apple');

// console.log(word.toUpperCase());

// built-in data types: arrays, strings, objects
// abstract data types: linked list, stack

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    push(data) {
        let newNode = new Node(data);

        // if list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // if list is non-empty
            // find the tail node
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next = null
            tail.next = newNode;
        }
    }

    pop() {
        if (this.head != null && this.head.next == null) {
            // list has only one node
            this.head = null;
        } else if(this.head != null) {
            let tail = this.head;

            while (tail.next.next != null) {
                tail = tail.next;
            }

            // tail.next.next = null
            tail.next = null;
        }
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(10);
list.push(11);

list.pop();
list.pop();

console.log(list.toArray());

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: null
            }
        }
*/