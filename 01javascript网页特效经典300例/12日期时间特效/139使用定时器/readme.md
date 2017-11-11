### 使用定时器

### 实例描述

很多时间特效需要使用定时器来配合完成一些功能,比如前面的按秒刷新

### 实例代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>使用定时器</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        
    </head>
    <body style="text-align:center">
        <p>
            <input type="button" value="开始定时" onclick="start();"/>
        </p>
        <h2 id="the_sec"></h2>

        <script type="text/javascript">     
            //开始定时的函数
            function start(){           
                //使用setInterval函数进行定时
                window.setInterval(function(){
                    //得到当前的时间对象
                    var date = new Date();
                    var str = '';       //定义拼接的字符变量
                    //得到小时数
                    str += date.getHours();
                    str += ':';         //拼接冒号
                    //得到分钟数
                    str += date.getMinutes();
                    str += ':';         //拼接冒号
                    //得到秒数
                    str += date.getSeconds();
                    //把结果显示出来
                    document.getElementById('the_sec').innerHTML = str;
                }, 1000);//间隔为1秒
            }
        </script>   
    </body>
</html>
```

### 运行效果
![使用定时器](img/使用定时器.gif)

### 具体分析
使用定时器,setInterval(),就是字符串的拼接

