### 切换样式表

### 实例描述

当王爷引入多个css文件时,程序会根据具体的情况来进行css文件的切换或禁用,本例将介绍如何实现这种切换
### 实例代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>切换样式表</title>
    <link rel="stylesheet" type="text/css" href="css/css1.css">
    <link rel="stylesheet" type="text/css" href="css/css2.css">
</head>
<body style="text-align:center">
      <span id="mytxt" class="myclass">测试文本</span>
      <br>
      <input type="button" value="更换样式表" onclick ="changeCss()">
      <script>
             function changeCss(){  // 按钮的click事件监听函数
                 // 通过js得到文本所使用的样式iao,使用的是css2
                 var rs =  document.styleSheets[1];
                 // 把当前的样式禁用
                 rs.disabled = true;
             }
      </script>
</body>
</html>
```
### 具体分析

本例的网页引入了两个css文件,且他们都定义了文本的颜色,根据css的规则,文本的颜色默认是采用了后定义的颜色,通过单击更换样式表按钮,程序禁用了第2个样式表,所以第一个样式表舅顺理成章的发挥了作用
