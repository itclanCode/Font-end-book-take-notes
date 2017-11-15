### 访问元素中style属性的css样式

### 实例描述
css的样式可以定义在外部,也可以定义在网页的头部,甚至可以出现在网页元素的style属性中,那么引用外部的css文件相比,访问元素的style属性定义的样式有什么不同呢

### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>访问原宿中style属性的css样式</title>
</head>
<body style="text-align:center">
       <span id="mytxt" style="color:red">测试文本</span>
       <br>
       <input type="button" onclick="showStyle()" value="查看文本的颜色" />

       <script>
              // 按钮的click事件监听函数
              function showStyle(){
                  // 获取目标DOM
                  var mytxt = document.getElementById("mytxt");
                  alert(mytxt.style.color);
              }
       </script>
</body>
</html>
```
### 运行效果
![访问元素中style属性的css样式](img/访问元素中style属性的css样式.gif)

### 具体分析
所有网页元素或网页标签都提供了style属性,它是用代码访问或控制原宿样式的一个重要的通道,通过控制属性来控制原宿的样式的