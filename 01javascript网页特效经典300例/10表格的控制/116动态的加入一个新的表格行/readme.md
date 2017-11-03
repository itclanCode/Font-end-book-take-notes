### 动态加入一个一个新的表格行

### 实例描述

在一些表单里,需要录入多少行数据是不确定的,那么可以提供这样一种功能,通过单击添加按钮来动态的增加一行,让用户可以动态的录入数据

### 实现代码

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>动态的加入一个新的表格行</title>
</head>

<body style="text-align:center">
    <p>
        <input type="button" value="加一行">
    </p>
    <table id="tb1" align="center" border="1">
        <tr>
			<td>col1</td>
            <td>col1</td>
        </tr>
    </table>
    <script>
             var oBtn = document.getElementsByTagName("input")[0];
             oBtn.onclick = function(){
             	addRow();
             }
    	     function addRow(){  // 为表格加一行函数
                  var tb1 = document.querySelector("#tb1");
                  // 使用innerHTML加一个表格行
                  tb1.innerHTML +="<tr><td>col1</td><td>col2</td></tr>"
    	     }
    </script>
</body>

</html>
```

### 运行效果

动态的为表格中的单元格文字添加样式效果

![动态的为表格中的单元格文字添加样式效果](img/动态的加入一个新的表格行.gif)

### 具体分析

本例中实现,使用的是innerHTML来实现表格行的增加,因为这样的方式比较好理解,但是这样有一个弊端就是如果增加爱的行数过多,可能会产生性能上的瓶颈

