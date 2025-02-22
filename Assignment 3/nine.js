// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(' ').filter(word => word !== '').length;
}

let paragraph = "This is a simple paragraph with several words.";
console.log(countWords(paragraph));  // 7
