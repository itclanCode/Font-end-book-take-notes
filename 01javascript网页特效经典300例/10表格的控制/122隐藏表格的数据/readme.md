#### 隐藏表格数据

### 实例描述

表格数据在网页中显示时,一般占据比较大的一块区域,有时为了让网页显示得简洁一些,可以将把表格数据暂时隐藏,本例将展示如何隐藏该特效

### 实现代码

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>隐藏表格数据</title>
</head>
<body style="text-align: center">
     
      <label for="">双击表头隐藏表格数据</label>
	  <table id="tb1" align="center" border="1">
	  	<tr onclick="hideTbl()">
	  		<th>名字</th>
	  		<th>年龄</th>
	  	</tr>
	  	<tr>
	  		<th>A</th>
	  		<th>11</th>
	  	</tr>
	  	<tr>
	  		<th>B</th>
	  		<th>12</th>
	  	</tr>
	  	<tr>
	  		<th>C</th>
	  		<th>14</th>
	  	</tr>
	  </table>

	  <script>
	  	     var hasHide = false;  // 初始化是没有隐藏表格的
	  	     // 为表格的隐藏的函数
	  	     function hideTbl(){
	  	     	 // 获取DOM
	  	     	 var tb1 =  document.getElementById("tb1");
	  	     	 var arr = [];  // 定义数组变量保存数据
	  	     	 var rows = tb1.rows;      // 得到当前表格的row数组
	  	     	 var len = tb1.rows.length;// 当前的行数
	  	     	 for(var i = 1;i<len;i++){
                    if(hasHide){               // 如果已经隐藏,则显示
                       rows[i].style.display = "";  
                    }else{                      // 如果还没有隐藏,则隐藏
                    	rows[i].style.display = "none";
                    }
	  	     	 }
	  	     	 //hasHide = hasHide == false?true:false;  // 把隐藏变量值取反
	  	     	  hasHide =!hasHide;
	  	     }
	  </script>
</body>
</html>
```

### 运行效果

![隐藏表格数据](img/隐藏表格数据.gif)

### 具体分析

只隐藏表格的操作比较简单,但是在隐藏表格的同时,表头是不希望被隐藏,因此实例中通过遍历表格行来把每一行的数据都隐藏,以实现隐藏特效

