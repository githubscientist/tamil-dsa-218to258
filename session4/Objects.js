let book1 = {
    title: 'dsa',
    author: 'sathish',
    price: 2000
}

let book2 = book1;

book2.author = 'krish';
book2.price = 3000;

book1.title = 'codekata';

console.log(book1);
console.log(book2);