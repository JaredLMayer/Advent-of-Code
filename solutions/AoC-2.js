const tools = {
    "A": 1,
    "B": 2,
    "C": 3,
}

const { readFileSync } = require('fs');

const rockPaperScissorsElf = () => { 
    const pointsMap = {
        "Rock": 1,
        "Paper": 2,
        "Scissors": 3
    }
    const outcomes = {
        A: { X: 3, Y: 6, Z: 0 },
        B: { X: 0, Y: 3, Z: 6 },
        C: { X: 6, Y: 0, Z: 3 }
      };
    const contents = readFileSync('inputs/AoC2-1-input.txt', 'utf-8');
    const arr = contents.split(/\r?\n/);

    let sum = 0;
    let count = 0;
    arr.forEach(item => {
        count++
        if (!!item) {
            sum += outcomes[item[0]][item[2]] + tools[item[2]];
        }
    });

    return sum;

}
const rockPaperScissorsElf2 = () => { 
    
    const outcomes2 = {
        A: { X: 3, Y: 4, Z: 8 },
        B: { X: 1, Y: 5, Z: 9 },
        C: { X: 2, Y: 6, Z: 7 }
    };

    const contents = readFileSync('inputs/AoC2-1-input.txt', 'utf-8');
    const arr = contents.split(/\r?\n/);
    let sum = 0;

    arr.forEach(item => {
        sum += outcomes2[item[0]][item[2]];
    });

    return sum;
    
}


module.exports = { rockPaperScissorsElf, rockPaperScissorsElf2 };
//     count++
//         let counterMove = counterMoves[item[0]];
        
//         counterMove + tools[item[2]]


//         outcomes[item[0]][item[2]]

//         sum += outcomes[item[0]][item[2]] + tools[item[2]]    
        // sum = sum + (parseInt(possiblePlays[`${item[0]} ${item[2]}`]) + parseInt(toolPoints[`${item[2]}`]));