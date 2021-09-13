const Randomizer = require('../randomizer')
const inquirer = require('inquirer')
const schema = require('../inquirer/model')
const options = {
    async createRandomizer({filename, delimiter}) {
        let randomizer;
        const delimiterMap = {
            'Line Break': '\n',
            'Comma': ',',
            'Whitespace': ' '
        }
        if (filename && delimiter) {
            randomizer = new Randomizer(filename, delimiter)
            return
        }
        let questions = pushQuestion(filename, delimiter)
        let answers = await inquirer.prompt(questions).catch(e => e.message)

        let chosenDelimiter = answers.delimiter ? answers.delimiter.split('-')[0].trim() : null
        let selectedDelimiter = chosenDelimiter ? delimiterMap[chosenDelimiter] : null

        randomizer = new Randomizer(answers.fileName ?? filename, selectedDelimiter ?? delimiter)
    }
}
function pushQuestion(filename, delimiter){
    let questions = []
    if (!filename) {
        questions.push(schema.fileName)
    }
    if (!delimiter) {
        questions.push(schema.delimiter)
    }
    return questions
}
module.exports.options = options