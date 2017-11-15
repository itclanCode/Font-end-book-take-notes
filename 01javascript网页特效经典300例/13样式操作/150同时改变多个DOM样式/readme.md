### 同时改变多个DOM样式

### 实例描述
通过单击字体变化的按钮,让浏览的文字变大或者变小
### 实例代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>同时改变多个DOM的样式</title>
    <style>
         .content{
            font-style: 14px;
         }
    </style>
</head>
<body style="text-align:center">
       <p class="content">这里是第1段</p>
       <p class="content">这里是第2段</p>
       <p class="content">这里是第3段</p>
       <br>
       <input type="button" value="大字体" onclick = "changeFont(16)">
       <input type="button" value="小字体" onclick = "changeFont(12)">

       <script>
              // 按钮的click事件监听函数,参数定义为字体的像素值
              function changeFont(p){
                 var fontSize = p+"px";  // 定义字号,大小为像素值
                 // 得到所有文本的DOM,采用了相同的class
                 var contents = document.getElementsByClassName('content');
                 // 用循环比那里所有的文字DOM
                 for(var i = 0;i<contents.length;i++){
                     // 通过style的fontSize改变字号
                     contents[i].style.fontSize = fontSize;
                 }
              }
       </script>
</body>
</html>
```
### 具体效果
![同时改变多个DOM的样式](img/同时改变多个DOM的样式.gif)
###具体分析

在编程时，同一个网页有相同的样式的元素，一般会为他们指定同一个class属性值,之所以这样做,一是让他们拥有相同的样式,二是方便对他们进行控制,在css代码里,字体的属性名称是font-size,但是javascript对应的属性名称时'fontSize'这是因为'-'在javascript是关键字,不可以用,所以在修改这些带'-'的属性值时,应该特别别注意