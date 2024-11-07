const fs = require('fs');

const filename = process.argv[2].replace('.ts', '.js');

let content = fs.readFileSync(filename, 'utf8');


content = content.replace(/"use strict";?\n?/g, '');
content = content.replace(/Object\.defineProperty\(exports, "__esModule"[^;]+;\n?/g, '');
content = content.replace(/var jQuery = require\("jquery"\);?\n?/g, '');


fs.writeFileSync(filename, content);