const fs = require('fs');

const convertFile = function(fromLocation, toLocation) {
    const fileData = loadNotes(fromLocation)
    const columnNames = Object.getOwnPropertyNames(fileData[0])
    const csvData = ""
    var csvRow = ""

    for(var i=0; i<columnNames.length; i++) {
        csvRow = csvRow + columnNames[i] + ","
    }
    writeRow(csvRow)
    for(var z=0; z<fileData.length; z++) {
        csvRow = ""
        for(var property in fileData[z]){
            csvRow = csvRow + fileData[z][property] + ","
        }
        writeRow(csvRow)
    }
    
}

function writeRow(csvRow) {
    csvRow = csvRow.substring(0, csvRow.length - 1)
        console.log(csvRow);
}

const loadNotes = function (file) {
    try {
        const dataBuffer = fs.readFileSync(file)
        const jsonData = dataBuffer.toString()
        const fileData = JSON.parse(jsonData)
        return fileData
    } catch (e) {
        return []
    }
}

module.exports = {
    convertFile: convertFile
}