const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return 'ERROR';
    }

    if (x < y) {
        [start, end] = [x, y];
    } else {
        [start, end] = [y, x];
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
