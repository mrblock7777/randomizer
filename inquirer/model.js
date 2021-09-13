const schema = {
    fileName: {
        type: 'input',
        name: 'fileName',
        message: 'Enter the file name - use relative path (./filename.txt)',
        validate: async (input) => {
            return input.length > 0 && input ? true : 'You need to enter a file name'
        }
    },
    delimiter: {
        type: 'list',
        name: 'delimiter',
        message: 'Choose the delimiter of the list',
        choices: [
            'Line Break - \\n',
            'Comma - ,',
            'Whitespace',
        ]
    }
}
module.exports = schema