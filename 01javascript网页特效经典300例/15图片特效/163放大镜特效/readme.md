### 放大镜特效
### 实例描述
在一些购物网站,为了让用户可以更清楚的看到商品的细节,往往会使用一种放大镜的特效,在该特效下可以看到商品图片的每一个细节
### 实现代码
```
<!DOCTYPE html>
<html>

<head>
    <title>放大镜特效</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style type="text/css">
    #div1 {
        width: 280px;
        height: 200px;
        position: relative;
        margin: 30px auto 0px;
    }

    #div1 img {
        width: 280px;
        height: 200px;
    }

    #div1 span {
        width: 100px;
        height: 100px;
        background: blue;
        left: 0px;
        top: 0px;
        position: absolute;
        display: none;
        filter: alpha(opacity:20);
        opacity: 0.2;
    }

    .show {
        width: 100%;
        height: 100%;
        background: blue;
        position: absolute;
        z-index: 10px;
        filter: alpha(opacity:10);
        opacity: 0.1;
        left: 0px;
        top: 0px;
    }

    #div2 {
        width: 560px;
        height: 400px;
        position: relative;
        display: none;
        overflow: hidden;
        margin: 0px auto 0px;
    }

    #img1 {
        position: absolute;
    }
    </style>
</head>

<body style="text-align:center" onload="init();">
    <div id="div1">
        <img src="img/2.gif">
        <span style="display: none; left: 204px; top: 41px;"></span>
        <div class="show"></div>
    </div>
    <div id="div2" style="display: none;">
        <img id="img1" src="img/2_big.gif" style="left: -610px; top: -149.21311475409834px;">
    </div>
    <script type="text/javascript">
    var moveme = false;                   // 定义变量是否在运动

    function init() {                      // 初始化函数
        var d1 = document.getElementById('div1');  // 获取小图片的DOM
        var the_float = d1.getElementsByTagName('div')[0]; 
        var the_span = d1.getElementsByTagName('span')[0];
        var the_img = document.getElementById('img1');  // 获取图片的DOM
        the_float.onmouseover = function() {            // 为浮动层定义鼠标out事件
            the_span.style.display = 'block';           // 显示放大镜层
            the_img.parentNode.style.display = 'block'; // 显示大图的层
        };
        the_float.onmouseout = function() {
            the_span.style.display = 'none';
            the_img.parentNode.style.display = 'none';
        };
        the_float.onmousemove = function(ev) {         // 为浮动层定义鼠标移动事件
            var oEvent = ev || event;                  // 获取事件
            // 通过鼠标事件发生的地方,计算放大镜的坐标
            var x = oEvent.clientX - d1.offsetLeft - the_span.offsetWidth / 2;
            var y = oEvent.clientY - d1.offsetTop - the_span.offsetHeight / 2;

            if (x < 0)
                x = 0;
            else if (x > the_float.offsetWidth - the_span.offsetWidth)
                x = the_float.offsetWidth - the_span.offsetWidth;
            if (y < 0)
                y = 0;
            else if (y > the_float.offsetHeight - the_span.offsetHeight)
                y = the_float.offsetHeight - the_span.offsetHeight;
            // 为指定css属性,拼接字符
            the_span.style.left = x + 'px';
            the_span.style.top = y + 'px';
            // 计算大图的局部显示区域的偏移量
            var percentX = x / (the_float.offsetWidth - the_span.offsetWidth);
            var percentY = y / (the_float.offsetHeight - the_span.offsetHeight);
            var iParent = the_img.parentNode;
            the_img.style.left = -percentX * (the_img.offsetWidth - iParent.offsetWidth) + 'px';
            the_img.style.top = -percentY * (the_img.offsetHeight - iParent.offsetHeight) + 'px';
        };
    }
    </script>
</body>

</html>
```
### 具体效果
![放大镜特效](img/放大镜特效.gif)
### 具体分析
基本原理:首先,必须要有两张图,一张缩略图和一张原始大图,其次,可以在缩略图的上层放一个层,负责监听鼠标正在移动到图片的哪个位置了的,得到这个位置以后,就可以通过比例计算,得到大图背景的偏移量应该是多少,在实例代码中,首先要监听缩略图上层鼠标移入和移出时间,当鼠标在缩略图上层移动时,就可以通过鼠标事件发生的坐标进行计算,得到相应的偏移量,最后,修改原图的背景偏移量,就可以实现放大镜的效果
