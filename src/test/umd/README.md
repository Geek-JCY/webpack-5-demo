# 测试 umd 包的 CMD、AMD、script tag 的三种使用方式

#### 测试 AMD 的使用方式
```
<!-- a.amd.html -->
<!DOCTYPE html>
<html>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"></script>
  <script src="./a/a.bundle.js"></script>
  <script>
    requirejs(['ALibrary'], function(ALibrary) {
      ALibrary.testA('amd');
    });
  </script>
</body>
</html>
```

#### 测试 CMD 的使用方式
```
// a.bundle.js 在 commonJS 中用法
// M1:
global.self = {}
const ALib = require('./a/a.bundle.js')
ALib.testA('aaa')

// DO: $ node a.test.js
// OUTPUT: testA aaa
```

#### 测试 CMD 的使用方式
```
<!-- a.scriptTag.js -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>test library.type:umd</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"><script src="./a/a.bundle.js"></script></head>
  <body>
    <script>
      ALibrary.testA('aaa')
    </script>
  </body>
</html>
```
