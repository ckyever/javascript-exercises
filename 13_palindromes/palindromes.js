const palindromes = function (text) {
    const clean = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = clean.split("").reverse().join("");
    return (clean === reverse);
};

// Do not edit below this line
module.exports = palindromes;
