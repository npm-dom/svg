var test = require('tape');
var svg = require('../');

test('can create an svg fragment', function(t) {
  var node;

  t.plan(2);
  t.ok(node = svg('<rect fill="blue" height="50" width="50">'));
  t.ok(node instanceof SVGElement);
});
