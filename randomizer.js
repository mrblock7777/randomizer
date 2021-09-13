const fs = require('fs')
const colors = require('colors')
module.exports = class Randomzer {
    #array;
    #fileName;
    #delimiter;
    constructor(fileName, delimiter, join = true) {
        this.#array = []
        this.#fileName = fileName
        this.#delimiter = delimiter === "\\n" ? "\n" : delimiter
        this.fillArray()
        if (this.#array.length) {
            let randomizedArray = this.randomizeArray()
            console.log(join ? randomizedArray.join('\n') : randomizedArray)
            console.log('Randomized array generated!'.green)
        }

    }
    fillArray() {
        try {
            let rawData = fs.readFileSync(this.#fileName, 'utf-8')
            this.#array = rawData.split(this.#delimiter)
        } catch (e) {
            if (e.code === 'ENOENT') {
                console.log(e.message.red)
            }
        }
    }
    randomizeArray() {
        let newArray = []
        let arrayCopy = this.#array
        for (let i = arrayCopy.length - 1; i > -1; i--) {
            let randomIndex = Math.floor(Math.random() * (i))
            newArray.push(arrayCopy[randomIndex])
            arrayCopy.splice(randomIndex, 1)
        }
        return newArray
    }
}