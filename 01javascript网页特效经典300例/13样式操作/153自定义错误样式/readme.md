### 自定义错误样式
### 实例描述
在一些网站的会员注册页面填写资料时,如果有什么遗漏或错误,会看到文本框下边界有一个比较醒目的小红线,该效果可以通过动态为元素添加class样式来实现
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自定义错误样式</title>
    <style>
        .myerr{
            border-bottom:1px dotted red;
        }
    </style>
</head>
<body style="text-align:center">
       <form action="" method="get" accept-charset="utf-8">
            姓名:<input type="text" name="t1" id="t1">
            年龄:<input type="text" name="t2" id="t2">
       </form><br />
       <input type="button" onclick="save()" value="保存" name="">
       <script>
               function save(){  // 按钮的click事件监听函数
                  // 获取目标DOM:t1和t2
                  var t1 = document.getElementById("t1");
                  var t2 = document.getElementById("t2");
                  if(t1.value == ''){  // 如果t1的值为空,则修改class
                    t1.className = "myerr";  // 在js里,用className表示标签的class
                  }
                  if(t2.value == ""){      // 如果t2的值为空,则修改class
                     t1.className = 'myerr';
                  }
               }
       </script>
</body>
</html>
```
### 运行效果
![自定义错误样式](img/自定义错误样式.gif)

### 具体分析
在实例代码中,姓名是必填项,因此在单击保存按钮时,需要检查该输入框是否为空,本例为这个输入框的class增加了一个myerr值,这个class是预定义好的,它的目的就是改变输入框下边框的颜色,网页中可能有很多元素采用相同的样式,建议不要通过手动修改元素的style属性来改变样式,而是把这些相同的样式预定义好,到时只需动态的修改元素的className属性即可达到目的,这么做有一个好处,就是可以单独维护这个样式的内容,从而提高代码的可维护性