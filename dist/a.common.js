// a.bundle.js 在 commonJS 中用法
// M1:
global.self = {}
const ALib = require('./a/a.bundle.js')
ALib.testA('aaa')

// DO: $ node a.test.js
// OUTPUT: testA aaa