### 克隆表格

### 实例描述

数据可以复制,呈现数据的表格也是可以复制的,本例如何实现复制整个表格及数据

### 实现代码

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>克隆表格</title>
</head>
<body  style="text-align:center">
	   <label>双击表头复制一个相同的表格出来</label>
	   <table id="tb1" align="center" border="1">
	   	<tr onclick="copyTbl()">
	   		<th>名字</th>
	   		<th>年龄</th>
	   	</tr>
	   	<tr>
	   		<th>A</th>
	   		<th>12</th>
	   	</tr>
	   	<tr>
	   		<th>B</th>
	   		<th>13</th>
	   	</tr>
	   	<tr>
	   		<th>C</th>
	   		<th>14</th>
	   	</tr>
	   </table>

	   <script>
	   	          var hasHide = false;
	   	          // 复制表格的函数
	   	          function copyTbl(){
	   	          	  var tb1 = document.querySelector("#tb1");
	   	          	  t = document.createElement('table'); // 创建一个表格元素
	   	          	  t.align = tb1.align;    // 复制tbl的对齐属性
	   	          	  t.border = tb1.border;  // 复制tbld的边框属性
	   	          	  t.innerHTML = tb1.innerHTML; // 复制tbl完整的标签和内容
	   	          	  document.body.appendChild(t);  // 添加新创建的元素到body尾部
	   	          }
	   </script>
</body>
</html>
```

### 效果图

![克隆表格](img/克隆表格.gif)

### 具体分析

克隆表格的过程一般需要注意两点

1. 复制表格标签的属性,比如实例代码中复制了表格的边框和对齐方式
2. 表格的内容,这一点可以通过innerHTML很好的实现

