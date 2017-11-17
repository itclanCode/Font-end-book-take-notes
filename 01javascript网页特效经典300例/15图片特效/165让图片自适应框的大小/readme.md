### 让图片自适应框的大小
### 实例描述
图片的大小是固定的,但是有时为了布局和排版的需要,要求图片可以自动适应显示区域的尺寸,也就是保证图片显示不不不变形的情况下,图片的宽度和高度都不超过画框的大小
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>让图片自适应框大小</title>
    <style>
         div{
            width: 100px;
            height: 200px;
            border: 1px solid #000;
            margin: 10px auto;
            padding: 10px;
         }
    </style>
</head>
<body style="text-align:center" onload="init()">
       <div><img src="img/1.jpg" alt="" id="the-img"></div>
    

       <script>
              function init(){   // 初始化函数
                  // 获取图片的DOM
                  var img = document.getElementById("the-img");
                  var width = img.width;    // 图片的宽度
                  var height = img.height;  // 图片的高度
                  var div = img.parentNode;  // 画框的DOM
                  var w = div.offsetWidth;   // 画框的实际宽度
                  var h = div.offsetHeight;  // 画框的实际高度
                  if(width<w && height<h){   // 如果图片的宽度和高度均小于画框
                     return;   // 就不用调整了
                  }
                  if(width/height>w/h){   // 如果图片的宽度和高度超过并失衡
                     img.width = w-20;     // 图片的宽度使画框的宽度并减1
                     img.height = (w-20)*(h-20)/width;  // 高度通过比例计算出来
                  }
              }
       </script>

</body>
</html>
```
### 具体效果
![让图片自适应框大小](img/让图片自适应框的大小.gif)
### 具体分析
如果图片的宽度和高度的比例可以随意修改的话,那么本实例实现起来就比较简单,直接将图片拉伸或者压缩成画框的比例就可以了,但是要求图片的宽高比例不能变化,因此就不得不进行一个等比换算
