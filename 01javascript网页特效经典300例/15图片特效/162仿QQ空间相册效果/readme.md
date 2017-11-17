### 仿QQ空相册效果
### 实例描述
在QQ空间的相册里,用户通过点击缩略图的形式来显示具体的照片大图
### 实现代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>仿QQ空间相册效果</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <style>
            .list img{cursor:pointer;}
        </style>
    </head>
    <body style="text-align:center">
        <p class="list">
            <img src="img/1.jpg" width="100" height="100" onclick="show(this.src)"/>
            <img src="img/2.gif" width="100" height="100" onclick="show(this.src)"/>
        </p>
        <p>
            <img src="img/1.jpg" id="big"/>
        </p>

        <script type="text/javascript">     
            function show(src){
                document.getElementById('big').src = src;
            }
        </script>   
    </body>
</html>
```
### 运行效果
![仿QQ空间相册效果](img/仿QQ空间相册效果.gif)
### 具体分析
本例实现相对比较简单,只需要为每一个缩略图定义click事件即可,并且在单击事件发生时，把对应源的地止传递给回调函数,然后在回调函数里,动态指定目标图片的src属性值
