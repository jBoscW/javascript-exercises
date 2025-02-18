const palindromes = function (str) {
    function isLetter(c) {
        return (c.toLowerCase() != c.toUpperCase()
                || c in [...Array(10).keys()]);
    };

    const strC = str
                            .split('')
                            .filter((c) => isLetter(c))
                            .join('')
                            .toLowerCase();

    const half = Math.floor(strC.length / 2) + 1;
    for (let i = 0; i < half; i++) {
        if (strC[i] !== strC.at(-1 - i))
            return false;
    }
    return true;
};


// palindromes('r3ace3car')
// Do not edit below this line
module.exports = palindromes;
