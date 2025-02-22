// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

function countVowelsAndConsonants(str) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0, consonantCount = 0;

    for (let char of str.toUpperCase()) {
        if (/[A-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    return { vowels: vowelCount, consonants: consonantCount };
}

let string = "This is a sample string with more than 20 characters";
let result = countVowelsAndConsonants(string);
console.log(result);
