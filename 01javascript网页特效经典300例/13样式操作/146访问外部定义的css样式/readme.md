 ### 访问外部定义的css样式

 ### 实例描述
 javascript对css的控制力非常强,甚至可以控制外部定义的css样式
 ### 实现代码
 ```
<!DOCTYPE html>
<html>
    <head>
        <title>访问外部定义的CSS样式</title>
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
        <input type="button" onclick="showStyle();" value="查看文本的颜色"/>
        <script type="text/javascript">
            //按钮的click事件监听函数
            function showStyle(){
                //通过js得到文本所使用的样式表，
                //因为只有一个，所以这里只需要访问第一个样式表
                var rs = document.styleSheets[0].cssRules;
                if(!rs)//有的浏览器不支持cssRules，需要用rules来得到
                    document.styleSheets[0].rules;
                //访问第一条规则的颜色样式，样式存在多个
                alert(rs[0].style.color);
            }
        </script>
    </body>
</html>
 ```
 ### 运行效果图
 ![访问外部定义的css样式](img/访问元素中style属性的css样式.gif)
 ### 具体分析

 上述代码中引入了一个外部的css文件,首先通过stylesheets数组得到这个样式表,然后使用其cssRules或者rules属性可以得到样式数组,因为css文件里只定义了一个样式,因此直接通过下标就可以访问到需要的color属性