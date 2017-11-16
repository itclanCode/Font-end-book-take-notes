### 用javascript代码替代css实现链接样式
### 实例描述
通过css的定义,可以瞄文本定义鼠标样式,也就是,鼠标移入和鼠标移走字体颜色有区别的

### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用javascript代码替代css实现链接样式</title>
</head>
<body style="text-align:center" onclick="linkAble()">
       <span id="link">我是一个伪链接</span>

       <script>
              // 页面加载完成以后的事件回调
              function linkAble(p){
                  // 获取目标DOM
                  var link = document.getElementById("link");  
                  link.style.cursor = 'pointer';    // 修改文本的鼠标样式
                  link.onmouseover = function(){  // 定义鼠标移入的事件
                      this.style.color = 'red';
                  }
                  link.onmouseout = function(){
                       this.style.color = 'black';  // 字体表黑色
                  }
                  link.onclick = function(){
                     alert("我被点击了");
                  }
              }
       </script>
</body>
</html>
```
### 运行效果
![用javascript代码替代css实现链接样式](img/用javascript代码代替css实现链接样式.gif)
### 具体分析
实例代码未定义任何链接标签,只是使用一个span元素模拟了一个超级链接效果,其中,它的鼠标移入样式是通过onmouseover和onmouseout事件模拟出来的,读者可以看到,颜色的变化通过style的color属性就可以实现