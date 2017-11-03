### 让表格行的背景颜色间隔开

### 实例描述

表格中的某一行往往代表着是一个实体的数据,或者是数据库中的某一条记录,因此用户在浏览表格数据时,注意力是随着行逐渐往下移动的,如果表格中每一行的背景都是一种颜色,则会感觉比较疲劳且不容易分辨,为了让用户把注意力集中在当前浏览的表格上,可以用程序将该行的背景色调深一些,即当前浏览的表格行的背景色同其他表格行的背景色间隔开,这样会有更好的用户体验

### 实现代码

 ```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>让表格行的背景颜色间隔开</title>
</head>
<body style="text-align:center" onload ="chCell()">
	    <table id="tb1" align="center" border="1">
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
	    		<th>13</th>
	    	</tr>
	    	<tr>
	    		<th>C</th>
	    		<th>14</th>
	    	</tr>
	    </table>
	    <script>
			     function chCell(){
			     	 var tb1 = document.getElementById("tb1");  // 获取DOM
			     	 var rows = tb1.rows;  // 得到当前表格的row数组
			     	 var len = tb1.rows.length;  // 当前的行数
			     	 for(var i = 0;i<len;i++){   // 遍历所有行
                        var r =  rows[i];        // 当前行
                        r.onmouseover = function(){
                        	// 把背景色变成粉红色
                        	this.style.backgroundColor = "pink";
                        }
                        r.onmouseout = function(){
                        	// 把背景色变回白色
                        	this.style.backgroundColor = "";
                        }
			     	 }
			     }	    	      
	    </script>
</body>
</html>
 ```

### 运行效果

![让表格行的背景颜色间隔开](img/让表格行的背景颜色间隔开.gif)

### 具体分析

实现该效果主要是依据onmouseover和onmouseout事件,当鼠标移入本行时,就把本行的背景色调深一些,同时把其他行的背景色去除,当鼠标移出本行时,就把本行的背景色恢复为白色

### 其他说明

从例子中可以看出,在javascript在处理DOM的优越性,因为如果手动为每一个tr标签添加onmouseover和onmouseout事件,那将是重复劳动,但是利用javascript的动态特性,动态的为tr指定事件,那么代码就少多了,代码也具有可读性

