### 带下划线的链接

### 实例描述
通过css,可以为链接设置一些样式,比如让链接带上下划线,让用户一看便是可以单击的链接,本例通过javascript来动态的为网页里所有链接加下划线的样式

### 实现代码

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>带下划线的链接</title>
    <style>
          a{
            text-decoration:none;
          }
    </style>
</head>
<body>
      <!-- 定义链接 -->
      <a href="#">链接一</a><br /><br />
      <a href="#">链接二</a><br /><br />
      <!-- 定义按钮 -->
      <input type="button" value="为链接加上下划线" id="myBtn" onclick="addLine()">

      <script>
               // 为链接加上下划线
               function addLine(){
                   // 获取所有的链接的DOM
                   var linkDOMS = document.getElementsByTagName("a");
                   for(var i = 0;i<linkDOMS.length;i++){   // 遍历
                         var link = linkDOMS[i];     // 当前的链接DOM
                         link.style.textDecoration = "underline";  
                   }
               }
      </script>
</body>
</html>
```
### 具体分析
链接的下划线样式由样式表里的textdecoration控制,因此javascript可以通过修改这个样式的值让链接包含下划线

### 其他说明
对于大多数浏览器来说,链接的默认包含下划线，但实际开发中往往需要另外设置样式来让链接无下划线,所以如果需要其中一些链接的样式发生改变，就只能使用javascript来实现