const sumAll = function(num1, num2) {
    let sum = 0;
    // check if either number is negative, if so, break
    // else
    // for loop from num1 to num2, init num1, as long as i is <= num2, then end
    // add the current iterator to var sum
    // return sum
    if (num1 < 0 && num2 < 0) {
        return "ERROR";
    }
    else {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
