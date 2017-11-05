### 树形导航菜单

### 实例描述

在一些文档类型的网页里,树形菜单非常常见,它可以像浏览计算机的磁盘一样找到用户需要的信息

### 实例代码

```
<!DOCTYPE html>
<html>
	<head>
		<title>树形导航菜单</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		
		<style>
			.tree{
				width:150px;
				border: 1px solid black;
				margin:0 auto;
			}
			.tree a:hover{
				background-color: pink;				
			}
			.tree p{
				margin:5px 0;
				text-align: left;
			}
			.menu1{
				padding-left:5px;
				margin:0;
			}
			.menu2{
				padding-left:20px;
				margin:0;
				display: none;
			}
		</style>
	</head>
	<body style="text-align:center">
		<div class="tree">
			<p class="menu1"><a href="#">菜单1</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
			<p class="menu1"><a href="#">菜单1</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
			<p class="menu1"><a href="#">菜单1</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
			<p class="menu2"><a href="#">菜单2</a></p>
		</div>
		<script src="jquery.js"></script>
		<script type="text/javascript">
			//在jquery的加载回调函数里指定操作内容
			$(function(){
				//定义所有的属性菜单的click事件
				$('.tree a').click(function(){
					//找到下一个菜单
					var p = $(this).parent().next();
					//如果该菜单是本级菜单的子菜单，则显示或者不显示
					while($(p).attr('class') == 'menu2'){
						$(p).toggle();	//显示或不显示交叉
						p = $(p).next();//循环找到下一个mune2的子菜单
					}
				});
			});
		</script>	
	</body>
</html>
```

### 实现效果

![树形菜单](img/树形菜单.gif)

### 具体分析

树形菜单就像windows操作系统的资源管理器一样,像一颗树,包含了所有分支和文件,用户可以根据这颗树找到目录和文件信息，本例代码首先结构型的定义菜单的HTML代码,然后为这些菜单定义click事件,这样就可以通过单击class为menu1的菜单找到他的子菜单