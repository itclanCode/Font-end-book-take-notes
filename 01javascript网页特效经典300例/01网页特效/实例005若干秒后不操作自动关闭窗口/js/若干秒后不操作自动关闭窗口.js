/*
* author:wangzhenchuan
* time:2017/6/17
* desc:若干秒后不操作自动关闭窗口
* 定义一个开关,目的是为了控制用户操作和关闭窗口交互纽带的作用
*
*
*/
var willClose = true; // 定义一个是否关闭的全局变量;
// 单击网页函数
function clickBody(){
   willClose = false;    // 单击网页后,则把变量变为false
}
// 鼠标点击文档的时候
document.onclick = function(){
	clickBody();
}
// 定时器函数
setInterval(function(){
	if(willClose){
		window.close();   // 关闭窗口
	}else{
		willClose = true;
	}
},5000);

