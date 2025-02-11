const removeFromArray = function(arr, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        let arg = nums[i]
        while (arr.includes(arg)) {
            const pos = arr.indexOf(arg);
            arr.splice(pos, 1);
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
