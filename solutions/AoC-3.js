const { readFileSync } = require('fs');
const contents = readFileSync('inputs/AoC3-input.txt', 'utf-8');
    
const rucksackSum = () => { 
    const arr = contents.split(/\r?\n/);
    let sum = 0;

    arr.forEach(item => {
        let firstHalf = item.slice(0, item.length / 2);
        let secondHalf = item.slice(item.length / 2);

        for (let i = 0; i < firstHalf.length; i++) {

            if (secondHalf.indexOf(firstHalf[i]) !== -1) {
                if (firstHalf[i].charCodeAt(0) >= 97 && firstHalf[i].charCodeAt(0) <= 122) {
                console.log('lower: ', firstHalf[i], (firstHalf[i].charCodeAt(0) - 96));
                sum = (sum + (firstHalf[i].charCodeAt(0) - 96))

                } else if (firstHalf[i].charCodeAt(0) >= 65 && firstHalf[i].charCodeAt(0) <= 90) {
                console.log('upper: ', firstHalf[i], secondHalf[i].charCodeAt(0) - 96)
                sum = (sum + (firstHalf[i].charCodeAt(0) - 38));
                }
                i = firstHalf.length;
            }
        }
    });
    return sum;
}

const rucksackSum2 = () => { 
    const arr = contents.split(/\r?\n/);
    let sum = 0;
    
    let startWindow = 0;
    let endWindow = startWindow + 3;
    let group = arr.slice(startWindow, endWindow);

    while (endWindow <= arr.length + 1) {

        let elf1 = group[0];
        let elf2 = group[1];
        let elf3 = group[2];

        for (let i = 0; i < elf1.length; i++) {
            if (elf2.indexOf(elf1[i]) !== -1 && elf3.indexOf(elf1[i]) !== -1) {
                if (elf1[i].charCodeAt(0) >= 97 && elf1[i].charCodeAt(0) <= 122) {
                    sum += (elf1[i].charCodeAt(0) - 96);
                } else if (elf1[i].charCodeAt(0) >= 65 && elf1[i].charCodeAt(0) <= 90) {
                    sum += (elf1[i].charCodeAt(0) - 38);
                }
                i = elf1.length;
            }
        }
        
        startWindow += 3
        endWindow += 3
        group = arr.slice(startWindow, endWindow);
    }
    return sum;
}


module.exports = { rucksackSum, rucksackSum2 };
