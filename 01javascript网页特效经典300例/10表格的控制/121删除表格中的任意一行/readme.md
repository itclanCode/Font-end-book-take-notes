### 删除表格中的任意一行

### 实例描述

与动态增加新的表格行对应,删除任意的表格行,也是一种数据不确定性的操作需要

### 实现代码

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>删除表格中的任意一行</title>
</head>
<body style="text-align:center">
	   <p>
	   	<label for="">删除的行号:</label>
	   	<input type="text" name="rowIndex" id="rowIndex" size="5">
	   	<input type="button" value="删除">
	   </p>
	   <table id="tab1" align="center" border="1">
	   	<tr>
	   		<td>col1</td>
	   		<td>col2</td>
	   	</tr>
	   	<tr>
	   		<td>col11</td>
	   		<td>col22</td>
	   	</tr>
	   	<tr>
	   		<td>col111</td>
	   		<td>col222</td>
	   	</tr>
	   </table>
	   <script>
	          var oDeleteBtn = document.getElementsByTagName("input")[1];
	          oDeleteBtn.onclick= function(){
	          	//console.log(1);
	          	delRow();
	          }
	   	      function delRow(){    // 为表格删除一行的函数
	   	      	// 获取DOM
	   	      	var tb1 = document.querySelector("#tab1");
	   	      	var i = document.querySelector("#rowIndex").value;
	   	      	i--;    // 索引要比行号小1
	   	      	tb1.deleteRow(i);        // 调用table自带的deleteRow()函数删除行

	   	      }
	   </script>
</body>
</html>
```

### 运行效果

![删除表格中的任意一行](img/删除表格中的任意一行.gif)

### 具体分析

删除表格行往往不会使用innerHTML属性,因为这样会造成巨大的性能瓶颈,因此本例使用table对象的deleteRow()函数,其参数是行的下标(从0开始),所以在用户输入行号为2时,其代码需要用deleteRow(2)来删除表格的第2行

