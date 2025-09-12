const leapYears = function(year) {
    const isCentury = (year % 100 === 0);

    if (isCentury) {
        return (year % 400 === 0);
    } else {
        return (year % 4 === 0);
    }
};

// Do not edit below this line
module.exports = leapYears;
