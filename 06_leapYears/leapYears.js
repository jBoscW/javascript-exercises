const leapYears = function(yr) {
    let leap = false
    if (yr % 4 === 0) {
        if (yr % 100 === 0 && yr % 400 !== 0)
            return leap;
        else
            leap = true;
    }
    return leap;
};

// Do not edit below this line
module.exports = leapYears;
