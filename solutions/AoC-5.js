const { readFileSync } = require('fs');
const contents = readFileSync('inputs/AoC5-input.txt', 'utf-8');
    
const crateManager = () => { 
    const startingArrangement = contents.split(/\n\s*\n/)[0];
    const strategyMap = contents.split(/\n\s*\n/)[1].split(/\r?\n/);
    const stacks = buildStacks(startingArrangement);
    console.log('before: ', stacks);
    let topOfStacks = '';

    strategyMap.forEach(item => {
        let strategyNums = item.match(/\d+/g);
        let numCrates = strategyNums[0];
        let fromStack = strategyNums[1];
        let toStack = strategyNums[2];

        for (let i = 0; i < numCrates; i++) {
            stacks[toStack].push(stacks[fromStack].pop());
        }
    });
    Object.values(stacks).forEach(arr => {
        topOfStacks += arr[arr.length - 1];
    });

    return topOfStacks;
};

const crateManager9001 = () => { 
    const startingArrangement = contents.split(/\n\s*\n/)[0];
    const strategyMap = contents.split(/\n\s*\n/)[1].split(/\r?\n/);
    const stacks = buildStacks(startingArrangement);
    console.log('before: ', stacks);
    let topOfStacks = '';

    strategyMap.forEach(item => {
        let strategyNums = item.match(/\d+/g);
        let numCrates = strategyNums[0];
        let fromStack = strategyNums[1];
        let toStack = strategyNums[2];
        stacks[toStack] = [...stacks[toStack], ...(stacks[fromStack].splice(stacks[fromStack].length - numCrates))];
    });
    Object.values(stacks).forEach(arr => {
        topOfStacks += arr[arr.length - 1];
    });

    return topOfStacks;
};

const buildStacks = (board) => {
    let boardArr = (board.match(/\[(.*?)\]/)).input.split(/\r?\n/);
    let stacks = {};


    for (let i = boardArr.length - 1; i >= 0; i--) {
        boardArr[i].match(/.{1,4}/g).forEach((crate, index) => {
            if (crate[0] === "[") {
                crate = crate.slice(1,2);
            }
            
            stackNumber = index + 1;

            if (!stacks[stackNumber] && crate.length === 1) {
                stacks[stackNumber] = [crate]
            } else if (crate.length === 1) {
                stacks[stackNumber].push(crate);
            }
        });
    };
    return stacks;
}


module.exports = { crateManager, crateManager9001 };
