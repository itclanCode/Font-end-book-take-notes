/*
* 让页面后退与前进
*
* @author:wangzhenchuan
* @time:2017/6/15
*
*
*/
var oPrev = document.querySelectorAll("input")[0],
    oNext = document.querySelectorAll("input")[1];

// 前进函数
function goForward(){
	window.history.forward();   // 到之前的网页
} 
// 后退函数
function goBack(){
	window.history.back();   // 到之后的网页
}
oPrev.onclick = function(){
	goForward();
}
oNext.onclick = function(){
	goBack();
}
