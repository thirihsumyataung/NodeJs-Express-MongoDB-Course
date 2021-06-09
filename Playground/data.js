const fs = require("fs");

const human = {
    name: "Andrew",
    planet: "Earth",
    age: 27
}

const humanJson = JSON.stringify(human);
fs.writeFileSync("data.json", humanJson); 
