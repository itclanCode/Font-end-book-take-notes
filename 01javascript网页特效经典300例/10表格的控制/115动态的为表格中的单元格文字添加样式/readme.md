### 动态的为表格中的单元格文字提那家样式

### 实例描述

在浏览表格中的数据时,经常需要突出某一个单元格的数据,这时可以通过单击这个单元格让他的样式与其他单元格的样式不一样,就可以起到一种标记或者提醒的作用

###  实现代码

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>动态为表格中的单元格文字添加样式</title>
</head>
<body style="text-align:center;color:blue" onload="chCell()">
	   <table id="tab1" align="center" border="1">
	   	<tr>
	   		<th>名字</th>
	   		<th>年龄</th>
	   	</tr>
	   	<tr>
	   		<th>A</th>
	   		<th>12</th>
	   	</tr>
	   	<tr>
	   		<th>B</th>
	   		<th>11</th>
	   	</tr>
	   	<tr>
	   		<th>C</th>
	   		<th>15</th>
	   	</tr>
	   </table>
	   <script>
	   	        function chCell(){    // 为表格改变样式的函数
                   var tb1 = document.querySelector("#tab1");
                   var rows = tb1.rows;    // 得到当前表格的row数组
                   var len = tab1.rows.length;  // 当前的行数
                   for(var i = 1;i<len;i++){
                      var cells = rows[i].cells;  // 得到这一行的所有单元格
                      for(var j = 0;j<cells.length;j++){
                          cells[j].onclick = function(){  // 定义单元格的click事件
                          	if(this.style.color = "" || this.style.color == "black"){
                                this.style.color = "red";
                          	}else{
                          		this.style.color = "black";
                          	}

                          }
                      }
                   }
	   	        }
	   </script>
</body>
</html>
```

### 运行的效果

![动态的为表格中单元格文字添加样式](img/动态的为表格中的单元格文字添加样式.gif)

### 具体分析

通过table的rows属性,遍历了表格的所有行,然后在通过cells属性,把每个单元格都遍历,在每次遍历的过程中,需要动态的为单元格也就是每个td便签定义click事件,把单元格的字体颜色变成红色

