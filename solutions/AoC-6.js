const { readFileSync } = require('fs');
const inputString = readFileSync('inputs/AoC6-input.txt', 'utf-8');
    
const tuningTrouble = () => { 
    const inputArr = [...inputString];
    
    for (const [inputIndex, letter] of inputArr.entries()) {
        let uniqueLetters = new Set();

        for (let i = inputIndex; i < inputIndex + 14; i++) {

            uniqueLetters.add(inputArr[i]);

            if (uniqueLetters.size === 14) {
                return i + 1;
            };
        };
    };
    
    
};

module.exports = { tuningTrouble };
