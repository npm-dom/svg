var test = require('tape');
var svg = require('../');

test('can create an svg fragment', function(t) {
  var node;

  t.plan(3);
  t.ok(node = svg('<rect fill="blue" height="50" width="50">'));
  t.ok(node instanceof SVGElement);
  t.ok(node.querySelector('rect'), 'found rect');
});

test('empty text returns an undefined fragment', function(t) {
  t.plan(1);
  t.ok(svg('') === undefined);
});

test('undefined text returns an undefined fragment', function(t) {
  t.plan(1);
  t.ok(svg() === undefined);
});
