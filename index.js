var reSVG = /^\s*<\s*svg(?:\s|>)/;

module.exports = function(text) {
  var div = document.createElement('div');

  // check the text is valid svg
  if (!reSVG.test(text)) {
    text = '<svg>' + (text || '') + '</svg>';
  }

  // parse the text
  div.innerHTML = text;

  // remove any script tags
  // apparently they are supported: http://www.w3.org/TR/SVG/script.html
  // but we don't want them (not until we are sure they are ok at least)
  [].slice.call(div.querySelectorAll('script')).forEach(function(script) {
    script.parentNode.removeChild(script);
  });

  return div.querySelector('svg');
};
