// Recursion: A function that calls itself.!

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

// function sayHello(N) {
//     if (N == 0) return;

//     console.log(`hello with N = ${N}`);
//     sayHello(N-1);
// }

// sayHello(3);

/*
    Recursion Tree

    sayHello(3)
        - N = 3
        - console.log('hello')
        - sayHello(2)
            - N = 2
            - console.log('hello')
            - sayHello(1)
                - N = 1
                - console.log('hello')
                - sayHello(0)
                    - N = 0; 0 == 0; return
*/

/*
    print the N natural numbers in the below order.

    Input: 5
    Output: 
    5
    4
    3
    2
    1

    Input: 7
    Output:
    7
    6
    5
    4
    3
    2
    1
*/

// function sayHello(N) {
//     if (N == 0) return;

//     console.log(`${N}`);
//     sayHello(N-1);
// }

// sayHello(7);

function sayHello(N) {
    if (N == 0) return;
    sayHello(N - 1);
    console.log(`${N}`);
}

sayHello(5);

/*
    sayHello(5)
        - N = 5; 5 == 0; false
        - sayHello(4)
            - N = 4; 4 == 0; false
            - sayHello(3)
                - N = 3; 3 == 0; false
                - sayHello(2)
                    - N = 2; 2 == 0; false
                    - sayHello(1)
                        - N = 1; 1 == 0; false
                        - sayHello(0)
                            - N = 0; 0 == 0; true
                        - console.log(1) x
                    - console.log(2) x
                - console.log(3) x
            - console.log(4) x
        - console.log(5) x


    sayHello(5)
*/