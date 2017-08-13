### 实例描述

当鼠标指针移动到某个DOM组件时,有时希望它有一些变化,以给用户更加明显的感觉,所以调整字体大小是一种常见的方式

### 实例代码

	<!DOCTYPE html>
	
	<html lang="en">
	
	<head>
	
	<meta charset="utf-8">
	<title></title>
	</head>
	
	<body>
	<!-- 定义块区域 -->
		<p style="margin:5px auto;width:100px;height:100px;border:1px solid black" onmouseover = "mOver(this)" onmouseout="mOut(this)">
				把鼠标移到该区域
		</p>
		<script type="text/javascript">
			      // 鼠标指针移进
			      function mOver(pDom){
			      	 pDom.style.fontSize = "20px";  // 调整字体大小为20像素
	
			      }
			      // 鼠标指针移出
			      function mOut(pDom){
			      	 pDom.style.fontSize = "";  // 调整字体大小为默认
			      }
		</script>
	</body>
	
	</html>
	
	
	###　运行的效果

鼠标进出时，字体代销变化

![](img/鼠标进出时字体大小.gif)

### 难点剖析

该效果的实现需要依赖两个事件,onmouseover,和onmouseout,前者监听的是书包指针移入到DOM组件时的回调函数,后者则用于鼠标移出时的调用,在大多数 的时候,他们是成对出现的,最后,通过改变样式里的fontsize属性来改变其字体的大小

