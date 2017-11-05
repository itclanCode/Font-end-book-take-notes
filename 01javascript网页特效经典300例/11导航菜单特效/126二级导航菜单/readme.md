### 二级导航菜单

## 实例描述

网页导航菜单所在区域比较有限,如果想要放更多的菜单项,那么二级菜单就是一个常见的拓展导航菜单的形式

### 实现代码

```
<!DOCTYPE html>
<html>
	<head>
		<title>二级导航菜单</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<script src="jquery.js"></script>
		<script type="text/javascript">
			//使用jquery的加载回调函数开始定义菜单的功能
			$(function(){
				var menus = $('.menu a');		//得到菜单下所有的链接
				for(var i=0;i<menus.length;i++){//遍历这些链接
					var m = menus[i];			//得到当前的链接
					$(m).mouseover(function(){	//为菜单链接定义onmouover事件
						//得到当前鼠标移入的菜单项的下标
						var index = $('.menu a').index(this);
						$('.sub_menu').hide();	//把所有的二级菜单隐藏
						$('.sub_menu').eq(index).show();//显示当前下标的菜单项
						//并且计算出这个菜单项应该处于的定位位置
						$('.sub_menu').eq(index).css('margin-left',(100*index)+'px');
					});
				}
			});
		</script>	
		<style>
			.menu{
				list-style: none;
				width: 400px;
				margin: 10px auto 0;
				padding:0;
			}
			.menu li{
				float:left;
				width:98px;
				border:1px solid black;
			}
			.menu a{
				color:black;
				width:100%;
				display:inline-block;
			}
			.menu a:hover{
				background-color:pink;
			}
			.clearfix:after {
				visibility: hidden;
				display: block;
				font-size: 0;
				content: " ";
				clear: both;
				height: 0;
			}
			.sub_menu{
				border:1px solid black;
				width: 100px;
				padding:0;
				display: none;
				margin:0;
			}
			.sub_div{
				width: 400px;
				margin: 0 auto;
			}
		</style>
	</head>
	<body style="text-align:center">
		<ul class="menu clearfix">
			<li><a href="#">菜单1</a></li>
			<li><a href="#">菜单2</a></li>
			<li><a href="#">菜单3</a></li>
			<li><a href="#">菜单4</a></li>
		</ul>
		<div class="sub_div">
			<ul class="sub_menu">
				<li><a href="#">菜单1-1</a></li>
			</ul>
			<ul class="sub_menu">
				<li><a href="#">菜单2-1</a></li>
				<li><a href="#">菜单2-2</a></li>
			</ul>
			<ul class="sub_menu">
				<li><a href="#">菜单3-1</a></li>
			</ul>
			<ul class="sub_menu">
				<li><a href="#">菜单4-1</a></li>
				<li><a href="#">菜单4-2</a></li>
				<li><a href="#">菜单4-3</a></li>
			</ul>
		</div>
	</body>
</html>
```

### 运行效果

![二级菜单](img/二级导航菜单.gif)

### 具体分析

首先,二级菜单项全部放在一个层里面,每一个菜单对应一个class属性为sub-menu的li,接下来,就可以设计菜单逻辑控制,其中,最主要的逻辑是菜单项的onmouseover事件,当鼠标移入该菜单时,就记录下它的下标值,然后根据这个下标值找到对应的子菜单，并显示他,与此同时,把其他的子选项全部都隐藏起来

