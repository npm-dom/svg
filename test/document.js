var test = require('tape');
var svg = require('..');
var fs = require('fs');
var icon = fs.readFileSync(__dirname + '/assets/icon.svg');

test('can create an svg element from a full svg string', function(t) {
  var node;

  t.plan(3);
  t.ok(node = svg(icon));
  t.ok(node instanceof SVGElement);
  t.ok(node.querySelector('path'), 'found path');
});
