# array-of-objects-to-csv

## About

A command like tool to convert an json file (array of objects) to a CSV file. I created it so that I could easily analyzelarge amounds of json data using Google Sheets and Microsoft Excel

## Run the Project

1) Clone the repository
2) Run `npm install` in the directory
3) Run `npm start <option>` see docs below

## Documentation

The program accepts several options
<br><br>
*--help*<br>
Provides useful help for using the tool [boolean]<br>
<br>
*--version*<br>
Shows the version number for the tool [boolean]<br>
<br>
*--originalFilePath* ⭐<br>
Path of the orginal file as json [string] [required]<br>
<br>
*--newFilePath* ⭐<br>
Path of the new file to be created as csv [string] [required]<br>
