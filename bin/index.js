#!/usr/bin/env node
const { options } = require('../options/randomizer-option')
const command = require('commander')
const pkg = require('../package.json')

command
    .version(pkg.version)
    .command('range <range>', 'accepts a string that defines the range of randomized number, e.g: 0-9')
    .option('-f, --filename <filename>', 'Accepts relative path of the file')
    .option('-d, --delimiter <delimiter>', 'The separator that delimits the list(Use double backslases for line breaks - \\n)')
    .action(optionAction)
    .parse(process.argv)

    
function optionAction(cmd) {
    options.createRandomizer(cmd)
}






