const removeFromArray = function(array, ...values) {
    // loop through array
    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
