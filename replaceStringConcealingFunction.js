const fs = require('fs');

const FUNCTION_NAME = "larone"
let script = fs.readFileSync("tags.js").toString()

let rawdata = fs.readFileSync('string-concealing-map.json');
let map = JSON.parse(rawdata);


function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

// replace occurences of calls to string replacement function
Object.keys(map).forEach(k => {
    script = replaceAll(script, FUNCTION_NAME + "(" + k + ")", '\'' + map[k] + '\'')
});

// write output to file
fs.writeFileSync('./tags.replaced.js', script);
