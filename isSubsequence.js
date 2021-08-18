// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

const isSubsequence = (subsequence, main) => {
    //traverse both arrays
    // traverse potential subsequence
    // sequence can be located anywhere in the main array
    let mainIdx = 0;
    let sequenceIdx = 0;
    while (mainIdx < main.length && sequenceIdx < subsequence.length) {
        if (main[mainIdx] === subsequence[sequenceIdx]) {
            sequenceIdx += 1;
        }
        mainIdx += 1;
    }
    return sequenceIdx === subsequence.length;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "acb"));
