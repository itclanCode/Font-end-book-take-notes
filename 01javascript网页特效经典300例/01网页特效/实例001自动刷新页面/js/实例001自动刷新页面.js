/*
*  @time:2017/6/15;
*  @author:zhenchuan.wang;
*  @content:实例001自动刷新页面js;
*
*/
/*刷新网页的函数*/
var oP = document.getElementsByTagName("p")[0];
function fresh(){
	 window.location.reload();  // 调用location的reload函数
	 oP.style.cssText = "background:red;color:red;";
}
setTimeout("fresh()",2000);   // 设置timeout,5秒钟刷新一次