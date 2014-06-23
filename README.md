# svg

Create svg elements from a string


[![NPM](https://nodei.co/npm/svg.png)](https://nodei.co/npm/svg/)



## Examples

Create an `<svg>` element from an svg fragment:

```js
var svg = require('svg')

document.body.appendChild(svg('<rect fill="blue" height="50" width="50">'));

```

Or, create an `<svg>` element using an from a full SVG document,
with some help from [brfs](https://github.com/substack/brfs):

```js
var svg = require('svg');
var fs = require('fs');
var icon = fs.readFileSync(__dirname + '/assets/icon.svg');

document.body.appendChild(svg(icon));

```

## License(s)

### MIT

Copyright (c) 2014 Raynos <raynos2@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
