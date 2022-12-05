const input = require('../inputs/AoC1-input.txt');
const { readFileSync } = require('fs');

// Part 1
const AoC1p1 = () => {
    const contents = readFileSync('inputs/AoC1-input.txt', 'utf-8');

    const arr = contents.split(/\r?\n/);
    let currentMax = 0;
    let runningSum = 0;

    arr.forEach(item => {
        if (item !== '') {
            runningSum += parseInt(item);
        } else {
            currentMax = Math.max(runningSum, currentMax);
            runningSum = 0;
        }
    });
    console.log(currentMax);
    return currentMax;
};

// Part 2
const AoC1p2 = () => {
    const contents = readFileSync('inputs/AoC1-input.txt', 'utf-8');

    const arr = contents.split(/\r?\n/);
    let elfMapping = {};
    let currentElf = 1;
    let runningSum = 0;

    arr.forEach(item => {
        if (item !== '') {
            runningSum += parseInt(item);
        } else {
            currentElf++;
            elfMapping[currentElf] = runningSum;
            runningSum = 0;
        }
    });
    let sortedVals = Object.values(elfMapping).sort((a, b) => b - a);
    return sortedVals[0] + sortedVals[1] + sortedVals[2];
};

module.exports = { AoC1p1, AoC1p2 };