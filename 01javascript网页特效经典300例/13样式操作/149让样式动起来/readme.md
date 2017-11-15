### 让样式动起来

### 实例描述

css样式是静态的,但是网页需要动起来才能与用户户动,javascript几乎可以控制网页中的一切,包括css的属性在内,这样可以让css动起来
### 实例代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>让样式动起来</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <!-- 定义一个外部样式，和引入外部css文件效果一样 -->
        <style>
            .myclass{
                color:blue;
            }
        </style>
        
    </head>
    <body style="text-align:center">    
        <span id="mytxt" class="myclass">测试文本</span>
        <br/>
        <input type="button" onclick="changeStyle();" value="改变文本的颜色"/>

        <script type="text/javascript">
            //按钮的click事件监听函数
            function changeStyle(){
                //通过js得到文本所使用的样式表，
                //因为只有一个，所以这里只需要访问第一个样式表
                var rs = document.styleSheets[0].cssRules;
                if(!rs)//有的浏览器不支持cssRules，需要用rules来得到
                    document.styleSheets[0].rules;
                //改变第一条规则的颜色样式
                rs[0].style.color = 'pink';
            }
        </script>
    </body>
</html>
```
### 运行效果
![让样式动起来](img/让样式动起来.gif)

### 具体分析
在网页里,通过css的样式定义了文本的颜色为蓝色,但是单击改变文本的颜色,按钮后,程序会把文本的style里面的color的颜色更改掉