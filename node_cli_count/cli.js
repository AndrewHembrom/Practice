import fs from 'fs';
import { stripVTControlCharacters } from 'util';
const args = process.argv



fs.readFile( args[2], 'utf-8', function (err, data) {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error("File not found: ", err.path);
        } else {
            console.error("Error reading file: ", err);
        }
        return;
    }
    
    // No. of characters
    let characters = 0;
    for (let a of data) {
        if (a != ' ' && a != '\n' ) {
            characters++;
        }
    }
    console.log("No. of characters: %d", characters);

    // No. of words
    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }
    console.log("No. of words: %d", countWords(data));

})

console.log("readFile called");