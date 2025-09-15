const fibonacci = function(input) {
    const number = Number(input);
    if (number < 0) {
        return "OOPS";
    }

    if (number === 0) {
        return 0;
    }

    if (number === 1) {
        return 1;
    }

    return fibonacci(number-2) + fibonacci(number-1);
};

// Do not edit below this line
module.exports = fibonacci;
