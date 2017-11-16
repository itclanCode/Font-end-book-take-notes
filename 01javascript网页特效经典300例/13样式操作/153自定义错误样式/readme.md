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

