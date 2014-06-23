var svg = require('..');
var fs = require('fs');
var icon = fs.readFileSync(__dirname + '/assets/icon.svg');

document.body.appendChild(svg(icon));
