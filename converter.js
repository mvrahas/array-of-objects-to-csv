const fs = require('fs');

const convertFile = function(fromLocation, toLocation) {

    const fileData = loadFile(fromLocation)
    const columnNames = Object.getOwnPropertyNames(fileData[0])
    let csvData = ""

    //Write the row of headers
    var csvRow = ""
    for(var i=0; i<columnNames.length; i++) {
        csvRow = csvRow + columnNames[i] + ","
    }
    csvData += writeRow(csvRow)

    //Write the rows of data
    for(var z=0; z<fileData.length; z++) {
        csvRow = ""
        for(var property in fileData[z]){
            csvRow = csvRow + fileData[z][property] + ","
        }
        csvData += writeRow(csvRow)
    }
    
    //Write the csv file to the system
    fs.writeFileSync(toLocation,csvData)
}

function writeRow(csvRow) {
    //Add a line break to the csv row
    csvRow = csvRow.substring(0, csvRow.length - 1) + '\n'
    return csvRow
}

const loadFile = function (file) {
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