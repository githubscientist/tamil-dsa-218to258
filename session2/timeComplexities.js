/*
    Which algorithm is better ?

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm

    1. Time Complexity: the amount of time taken by an algorithm to run!
    2. Space Complexity: the amount of memory taken by an algorithm to run!

    Mathematical notations: Asymptotic notations

    1. Big - 'O' (OH) - upper bound
    2. Big - 'Ω' (OMEGA) - lower bound
    3. Big - 'Θ' (THETA) - tight bound

    Situtations/Cases: (Inputs)

    1. Worst Case
    2. Best Case
    3. Average Case

    time complexity; upper bound; worst case; Big-'O'
*/

/* 
    Example: 

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case(first element): If the key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1
    Case(middle element): If the key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)
    Case(last element): If the key = 10, Comparisons => 10 => Worst Case => O(N)
    Case(element not present): If the key = 11, Comparisons => 10 => Worst Case => O(N)
*/

/*
    Example: 1

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    time complexity = ?

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    let a = 0, b = 0; // declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    total executions = values of i
    i = 0, 1, 2, 3, 4, 5, ...., .., N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, ...., M-1 => M

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is constant)
                                   = O(N + M)

*/

/*
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    time complexity = T(N) = 1 + N + N
                           = 2N
                           = O(N)
*/

/*
    let a = 0, b = 0;
    let M = 5N;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    time complexity = T(N) = 2 + N + 5N
                           = 2 + 6N
                           = 6N
                           = O(N)
*/

/*
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    time complexity, T(N) = 1 + N * N
                          = 1 + N^2
                          = O(N^2)
    
    1. Assume some values for N

    N = 4
        i = 0; j = 0, 1, 2, 3 => 4 times
        i = 1; j = 0, 1, 2, 3 => 4 times
        i = 2; j = 0, 1, 2, 3 => 4 times
        i = 3; j = 0, 1, 2, 3 => 4 times

        total executions = 4 + 4 + 4 + 4
                         = 16
    N = 5
        i = 0; j = 0, 1, 2, 3, 4 => 5 times
        i = 1; j = 0, 1, 2, 3, 4 => 5 times
        i = 2; j = 0, 1, 2, 3, 4 => 5 times
        i = 3; j = 0, 1, 2, 3, 4 => 5 times
        i = 4; j = 0, 1, 2, 3, 4 => 5 times

        total executions = 5 + 5 + 5 + 5 + 5
                         = 25
    N = 6, total executions = 36

    2. Summarize the results and find a pattern

    For N = 4, executions = 16
    For N = 5, executions = 25
    For N = 6, executions = 36

    executions = N^2

    3. calculate the total time complexity

    total time complexity = T(N) = 1 + N^2
                                 = O(N^2)
*/

/*
    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    N = 4
        i = 0; j = 4, 3, 2, 1; 4 executions
        i = 1; j = 4, 3, 2; 3 executions
        i = 2; j = 4, 3; 2 executions
        i = 3; j = 4; 1 execution

        total executions = 4 + 3 + 2 + 1 = 10
    N = 5, executions = 15
    N = 6, executions = 21
    N = 7, executions = 28
    N = 10, executions = 55

    executions = sum of first N natural numbers
               = N + N-1 + N-2 + N-3 +.....+ 1
               = (N* (N+1))/2

    time complexity, T(N) = 1 + (N* (N+1))/2
                          = N * (N + 1)
                          = N^2 + N
                          = O(N^2)

*/