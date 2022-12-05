const { readFileSync } = require('fs');
const contents = readFileSync('inputs/AoC4-input.txt', 'utf-8');
    
const rangeOverlap = () => { 
    const arr = contents.split(/\r?\n/);
    let fullyContainedPairs = 0;

    arr.forEach(item => {
        let range = item.split(',');
        let elfRange1Low = parseInt(range[0].split('-')[0])
        let elfRange1High = parseInt(range[0].split('-')[1])
        let elfRange2Low = parseInt(range[1].split('-')[0])
        let elfRange2High = parseInt(range[1].split('-')[1])
        
        console.log(typeof(elfRange1High))
        if (elfRange1Low >= elfRange2Low && elfRange1High <= elfRange2High ||
            elfRange2Low >= elfRange1Low && elfRange2High <= elfRange1High) {
            
                fullyContainedPairs++;
        }
    });
    return fullyContainedPairs;
}
const rangeOverlap2 = () => { 
    const arr = contents.split(/\r?\n/);
    let fullyContainedPairs = 0;

    arr.forEach(item => {
        let range = item.split(',');
        let elfRange1Low = parseInt(range[0].split('-')[0])
        let elfRange1High = parseInt(range[0].split('-')[1])
        let elfRange2Low = parseInt(range[1].split('-')[0])
        let elfRange2High = parseInt(range[1].split('-')[1])
        
        if (elfRange1Low >= elfRange2Low && elfRange1Low <= elfRange2High ||
            elfRange1High <= elfRange2High && elfRange1High >= elfRange2Low ||
            elfRange2Low >= elfRange1Low && elfRange2Low <= elfRange1High ||
            elfRange2High <= elfRange1High && elfRange2High >= elfRange1Low) {
                fullyContainedPairs++;
        }
    });
    console.log(fullyContainedPairs);
}


module.exports = { rangeOverlap, rangeOverlap2 };
