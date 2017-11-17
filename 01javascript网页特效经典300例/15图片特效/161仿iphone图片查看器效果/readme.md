### 仿iphone图片查看器的效果
### 实例描述
在iphone手机上,用户通过滑动手指的方式来切换下一张或者上一张图片,在网页里,也可以实现类似的效果
### 实现代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>仿iPhone图片查看器效果</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        
    </head>
    <body style="text-align:center">
        <h2>点击图片翻下一张</h2>
        <img src="img/1.jpg" id="the_img" onclick="next()" width="250" height="200"/>

        <script type="text/javascript">     
            var arr = ['img/1.jpg','img/2.gif'];        // 定义图片数组,这里只有2张
            function next(){                            // 定义click图片的事件函数
                var img = document.getElementById('the_img'); // 获取DOM
                var src = img.src;                            // 获取图片的源
                var findIt = false;                           // 定义一个变量
                for(var i=0;i<arr.length;i++){                // 遍历图片数组
                    if(src.indexOf(arr[i]) > -1){             // 如果实际的源与数组当前的源相同
                        findIt = true;                      // 就认为找到了图片
                    }
                    if(findIt){                            // 当找到现在是第几张图片以后
                        var j = i + 1;                     // 把索引加1
                        if(j == arr.length)                // 如果是最后一张,则跳转到第一章
                            j = 0;
                        img.src = arr[j];                 // 定义图片新的源
                        break;                            // 退出循环
                    }
                }
            }
        </script>   
    </body>
</html>
```
### 具体效果
![仿iphone图片查看器的效果](img/仿iphone图片查看器效果.gif)
### 具体分析
本例主要涉及两个操作步骤,一是监听图片被单击的事件,而是如何判断当前的图片式数组中的第几张图片,实例代码主要是通过图片源的对比来发现图片式第几张,然后就可以啊下一个索引对应的图片指定为目标图片源
