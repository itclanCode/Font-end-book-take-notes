### 实例078阅读完协议以后才可以单击注册的按钮

### 实例描述
与上一个实例一样,为了防止用户不阅读协议就直接注册,还可以通过一个小小狗的技巧,让用户不得不读完协议以后才可以单击注册按钮

### 实现代码
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>078阅读完协议以后才可以单击的注册按钮</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<style>
        div{
            width: 200px;
            height: 150px;
            overflow-y: scroll;
            margin: 5px auto;
            border:1px solid #ccc;
        }
</style>
</head>
<body style="text-align:center">
       <div id="xieyi" onscroll="doScroll()">
        请认真阅读本协议
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
       </div>
       <br>
       <input type="button" value="注册" id="btn" disabled="disabled">
       <script>
                function doScroll(){
                    // 获取协议和按钮的DOM
                    var d = document.getElementById("xieyi");
                    var btn = document.getElementById("btn");
                    if(d.scrollTop+d.offsetHeight>200){  // 判断是否滚动到最底部
                        btn.disabled = false;        // 恢复按钮可用
                    }
                }

       </script>
</body>
</html>
```
### 运行效果
见浏览器中所示
### 具体分析
如何判断协议内容是否全部展示在电脑屏幕上了,本例采用的是,就是把协议的内容放在一个带滚动条的区域里,然后监听这个区域的滚动事件,当滚动条距离顶部的距离和区域的实际高度之和超过内容本应展示的高度时,就可以认为内容已经全部阅读了,此时就可以把注册的按钮可用状态恢复回来