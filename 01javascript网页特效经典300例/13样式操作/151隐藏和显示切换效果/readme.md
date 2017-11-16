### 隐藏和显示的切换效果
### 实例描述

网页元素的隐藏和显示时一对相反的操作,这在网页开发中是最常见的一种特效手段
### 实现代码
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>隐藏和显示的切换效果</title>
    <style>
         .myclass{
            color:white;
            background-color: #000;
            padding: 5px;
         }
    </style>
</head>
<body style="text-align:center">
        <span id="mytxt" class="myclass">测试文本</span>
        <br>
        <input type="button" value="隐藏/显示" onclick="showHide()">
        <script>
                 // 
                 function showHide(){
                    // 获取目标DOM
                    var mytxt = document.getElementById("mytxt");
                    if(mytxt.style.display == "none"){  // 文本是隐藏的
                       mytxt.style.display  = "inline"; // 那么就恢复它原有的display值
                    }else{
                        mytxt.style.display = 'none';
                    }
                 }
        </script>
</body>
</html>
```
### 运行效果
![隐藏和显示的切换效果](img/隐藏和显示的切换效果.gif)
### 具体分析
在css样式里,display属性是否为none是控制网页元素显示与否的重要技能,因此,从实例代码中可以看到,在文本显示时把该属性设置为none,在已经为none时又将其恢复为Inline
display属性的值不只是本例中所提到的这两个,还包括block,它与inline在显示时有本质的区别,inline指的是内联元素,它主要用于从左到右显示,比如文字,链接等,而block指的是框元素,它主要用于从上到下排列显示,比如div,table这些比较大的元素
