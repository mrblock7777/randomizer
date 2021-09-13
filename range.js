
const colors = require('colors')
module.exports = class Range {
    constructor(range) {
        let splitRange = range.split('-')
        let min = splitRange[0]
        let max = splitRange[1]
        console.log('Your lucky number is: ' + this.getRandomNumber(min, max).toString().green)

    }
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}