### 实例描述

双击鼠标,让网页自动开始滚动,这是一周工厂坚的小说网页特效,可以让用户看小说时翻页,本例将演示如何实现该特效

### 实例代码



	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="utf-8">
	<title></title>
	</head>
	<body>
	<!-- 定义标签,让网页比较长 -->
		<p align="center">双击开始滚屏,单击则停止</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>11</p><p>11</p><p>11</p><p>11</p><p>11</p>
		<p>这就是底部了的</p>
	
		<script type="text/javascript">
			       var nowPos;   // 当前的位置
			       var myTimer;  // 定时器变量
			       function startIt(){
			       	   // 开始定时器,以10毫秒为单位
			       	   myTimer = window.setInterval("scrollPage()",10);
			       }
			       // 停止函数
			       function stopIt(){
			       	   // 取消定时器
			       	   clearInterval(myTimer);
			       }
			       // 滚动屏幕的函数
			       function scrollPage(){
			       	   	  window.scrollBy(0,1);   // 以一像素为单位开始滚屏
			       }
			       	   
			       document.onmousedown = stopIt; // 监听单击事件
			       document.ondbclick = startIt;   //  监听双击事件
	
		</script>
		</body>
	
	</html>
	
### 难点剖析

文本对象的双击鼠标事件被监听到以后,就开始使用window的scrollBy()函数滚动,该函数包含两个参数,分别是横坐标和纵坐标上的像素值,本例只需要让纵坐标不断增大即可,直到滚动到网页底部则停止

​	