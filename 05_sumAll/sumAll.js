const sumAll = function(num1, num2) {
    args = Array.from(arguments)
    if (args.every(n => n >= 0) 
        && args.every(n => Number.isInteger(n))) {
        if (num2 < num1) {
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }

        let sum = 0;
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
