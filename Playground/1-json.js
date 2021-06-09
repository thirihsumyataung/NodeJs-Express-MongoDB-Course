const fs = require("fs");

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const bookJson = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJson); 
console.log(bookJson);
const parseData = JSON.parse(bookJson);
console.log(parseData);
console.log(parseData.title); 
