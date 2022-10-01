# array-of-objects-to-csv

## About

A command line tool to convert an json file (array of objects) to a CSV file. I created it so that I could easily analyzelarge amounds of json data using Google Sheets and Microsoft Excel

## Run the Project

1) Clone the repository
2) Run `npm install` in the directory
3) Run `node app.js convert <options>` using the options below.

## Documentation

*--help*<br>
Provides useful help for using the tool [boolean]<br>
<br>
*--version*<br>
Shows the version number for the tool [boolean]<br>
<br>
*--originalFilePath* ⭐<br>
Relative path of the orginal file in json format [string] [required]<br>
<br>
*--newFilePath* ⭐<br>
Relative path of the new file to be created in csv format [string] [required]<br>

## Example

Input (json)
```
[
  {
    "date" : "2019-01-28 08:00:00 +0000",
    "value" : "4.5118318",
    "timezone_offset_hr" : -280000
  },
  {
    "date" : "2019-01-29 08:00:00 +0000",
    "value" : "3.2531915",
    "timezone_offset_hr" : -280000
  },
  {
    "date" : "2019-01-30 08:00:00 +0000",
    "value" : "4.5821037",
    "timezone_offset_hr" : -280000
  }
]
```

Output (csv)
```
date,value,timezone_offset_hr
2019-01-28 08:00:00 +0000,4.5118318,-280000
2019-01-29 08:00:00 +0000,3.2531915,-280000
2019-01-30 08:00:00 +0000,4.5821037,-280000
```
