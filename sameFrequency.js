// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
    const num1Freq = {};
    const num2Freq = {};

    let strnum1 = String(num1);
    let strnum2 = String(num2);

    for (num of strnum1) {
        if (!num1Freq[num]) {
            num1Freq[num] = 1;
        } else {
            num1Freq[num] += 1;
        }
    }

    for (num of strnum2) {
        if (!num2Freq[num]) {
            num2Freq[num] = 1;
        } else {
            num2Freq[num] += 1;
        }
    }

    for (key in num1Freq) {
        if (num1Freq[key] !== num2Freq[key]) return false;
    }

    return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
