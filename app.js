const yargs = require('yargs')
const converter = require('./converter.js')

yargs.command({
    command: 'convert',
    describe: 'Convert the file from array of objects to csv',
    builder: {
        originalFilePath: {
            describe: "Path of the orginal file",
            demandOption: true,
            type: 'string'
        },
        newFilePath: {
            describe: "Desired path of the file to be created",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        converter.convertFile(argv.originalFilePath, argv.newFilePath)
    }
})

yargs.parse()





//read original-file


//validate array of objects format


//convert each object to string


//create file using a name inputted by the user


//print strings to external file


//save external file as csv


//
