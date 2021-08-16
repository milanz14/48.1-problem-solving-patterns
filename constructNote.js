// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

const constructNote = (str1, str2) => {
    let str1Count = {};
    let str2Count = {};

    for (let i = 0; i < str1.length; i++) {
        if (!str1Count[str1[i]]) {
            str1Count[str1[i]] = 1;
        } else {
            str1Count[str1[i]] += 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!str2Count[str2[i]]) {
            str2Count[str2[i]] = 1;
        } else {
            str2Count[str2[i]] += 1;
        }
    }

    // loop through the objects and compare if the value for each key is the same in both objects and if the key exists in both objects
    for (let key in str1Count) {
        if (!str2Count[key]) {
            return false;
        }
        if (str2Count[key] >= str1Count[key]) {
            return true;
        }
    }
    return false;
};

console.log(constructNote("aa", "abc"));
console.log(constructNote("abc", "dcba"));
console.log(constructNote("aabbcc", "abbcabacddff"));

module.exports = constructNote;
