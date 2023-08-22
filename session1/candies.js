var isGreater = function(totalCandies, candies, i) {
    let assumption = true;

    for(let index=0; index<candies.length; index++){
        if(index != i){
            if(totalCandies < candies[index]){
                assumption = false;
            }
        }
    }

    return assumption;
}
// time complexity: O(N^2)
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // create or initialize an empty boolean array <- result
    let result = [];

    // traverse or iterate the candies array <- i = 0 to n-1
    for(let i = 0; i <= candies.length - 1; i++){
        // for every kid's index
        // find the totalCandies = candies[i] + extraCandies
        let totalCandies = candies[i] + extraCandies;

        // check if the totalCandies is greater than or equal to 
        // all the other kids candies in the array
        if(isGreater(totalCandies, candies, i)){
            // if true => push true to the result array
            result.push(true);
        } else {
            // else => push false to the result array
            result.push(false);
        }
    }

    // return the result array
    return result;
};

/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3]
            i [0][1][2][3][4]

    extraCandies = 3


    result = [T, T, T, F, T]
            i [0][1][2][3][4]
        
    @index 0
        totalCandies = candies[0] + extraCandies
                     = 2 + 3
                     = 5 >= [3, 5, 1, 3]
                          i [1][2][3][4]
    2. Algorithm

    1. create or initialize an empty boolean array <- result

    2. traverse or iterate the candies array <- i = 0 to n-1
        3. for every kid's index
        find the totalCandies = candies[i] + extraCandies

        4. check if the totalCandies is greater than or equal to 
        all the other kids candies in the array

        5. if true => push true to the result array
        else => push false to the result array
    
    6. return the result array

    3. Implementation
*/