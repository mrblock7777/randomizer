const commander = require('commander');
const Range = require('../range')

commander
    .argument('<range>', 'range')
    .action(randomizeNumber)
    .parse(process.argv)
function randomizeNumber(range){
    new Range(range)
}
