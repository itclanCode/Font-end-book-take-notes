/*
* 修改网页的标题
* 
* author:wangzhenchuan
* time：2017/6/17
*
*/
var oBtn = document.querySelectorAll("input")[1];
// 修改标题
function changeTitle(){
	// 得到新的title的值
	var newTitle = document.getElementById("newTitle").value;
	document.title = newTitle;  // 修改标题
}
//点击按钮触发事件,更换标题
oBtn.onclick = function(){
	changeTitle();
}
