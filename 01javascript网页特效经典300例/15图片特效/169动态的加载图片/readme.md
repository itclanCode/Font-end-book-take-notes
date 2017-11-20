###  动态的加载图片

### 实例描述
图片式网页中显示中最耗流量的元素之一,为了节省网络流量和加载网页速度,网站可以通过动态加载图片的方式提供用户的友好度
### 实现代码
```
<!DOCTYPE html>
<html>
    <head>
        <title>延迟加载图片</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    </head>
    <body style="text-align:center">
        <p>
            <input type="button" value="加载" onclick="loadImg();"/>
        </p>
        <img lazy_src="img/1.jpg" src=""/>

        <script type="text/javascript">     
            function loadImg(){ 
                var pics = document.getElementsByTagName('IMG');
                for(var i=0;i<pics.length;i++){
                    pics[i].src = pics[i].attributes['lazy_src'].value;
                }
            }
        </script>
    </body>
</html>
```
### 具体效果
![动态加载图片](img/动态加载图片.gif)
### 具体分析
虽然在网页的HTML代码中定义了一个图片标签,但这个图片并没有任何显示,这样是因为没有指定该标签的src值,而是指定了lazy_src的值,该值并不是HTML规范包含的值,而是程序自定义的值,单击加载按钮后,程序再将lazy_src的值赋值为src,这样图片就显示出来了
通过重新指定src的方式,浏览器就可以动态加载图片的地止,也就达到了节约网络流量和提高访问速度的目的
