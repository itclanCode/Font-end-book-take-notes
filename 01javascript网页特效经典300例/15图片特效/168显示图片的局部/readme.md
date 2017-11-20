### 显示图片的局部
### 实例描述
有时,为了提高网页的浏览速度,会把所有的小图标放在一个图片文件夹里,然后把这些图片设置为某元素的背景,并让背景通过一定的偏移量来显示,这样就可以让图片局部显示,而不是全不包邮显示
### 实现代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>显示图片的局部</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        
        <style>
            div{
                background: url('img/3.png') 0 0 no-repeat;
                width: 400px;
                height: 300px;
                margin: 10px auto;
            }
        </style>
    </head>
    <body style="text-align:center">
        <p>
            <input type="button" value="显示切换" onclick="showImg();"/>
        </p>
        <div id="mydiv"></div>

        <script type="text/javascript">     
            var arr = [[0,0],[-400,0],[-400,-300],[0,-300]];
            var index = 0;
            function showImg(){ 
                var mydiv = document.getElementById('mydiv');
                index++;
                if(index == 4)
                    index = 0; 
                var x = arr[index][0] + 'px';
                var y = arr[index][1] + 'px';
                mydiv.style.backgroundPosition = x + ' ' + y;
            }
        </script>
    </body>
</html>
```
### 运行效果
![显示图片的局部](img/显示图片的局部.gif)
### 具体分析
本例图片有4个区域可以作为单独的图片元素来显示,通过数组变量arr把图片所有的可能便宜量记录下来,然后在用户单击显示切换按钮时,挨个设置目标div的背景位置,这样就可以看到4副不同的图片了,而其实这些图片都来自于同一个文件
