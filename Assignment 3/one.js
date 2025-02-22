// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const states = ["Andhra Pradesh", "Bihar", "Uttarakhand", "Maharashtra", "Kerala", "Goa", "Tamil Nadu"];

const filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log(filteredStates);
