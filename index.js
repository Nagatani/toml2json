const fs = require("fs");
const toml = require("toml");

if (process.argv.length < 2) {
    console.err("Require arguments is not set [Toml file path] [Output file path].");
    process.exit();
}

const inFP = process.argv[2];
const outFP = process.argv[3];

if (!fs.existsSync(inFP)) {
    console.err("Error: File not found. (" + inFP + ")");
    process.exit();
}

fs.writeFileSync(outFP, JSON.stringify(toml.parse(fs.readFileSync(inFP))));
console.log("JSON File output. (" + outFP + ")");
