const reverseString = function() {
    let hello = "hello";
    let olleh = "";
    for (let i = hello.length - 1; i >= 0; i--) {
        olleh+=hello[i]
    }
    return olleh;
};

// Do not edit below this line
module.exports = reverseString;
