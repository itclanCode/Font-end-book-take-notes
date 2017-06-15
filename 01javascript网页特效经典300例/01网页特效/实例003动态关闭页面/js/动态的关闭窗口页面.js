/*
*  动态的关闭窗口页面
*
*  @author:wangzhenchuan
*  @time:2017/6/15
*
*/
var oBtn = document.querySelector("input");  // 获取按钮
// 关闭窗口函数
function closeWin(){
	window.close();   // 调用window对象的close()函数,关闭窗口
}
oBtn.onclick = function(){
	closeWin();
}
