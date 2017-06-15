/*
* 页面载入等待界面
* 
* @author:wangzhenchuan
* @time:2017/6/15
*
*/
// 提交表单动作
function submitForm(){
   var oShadow = document.querySelector(".shadow");  // 获取元素
       oShadow.style.display = "block";  // 取消隐藏
       self.location.reload();   // 重新加载页面来模拟表单的提交

}
var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
	submitForm();
}
