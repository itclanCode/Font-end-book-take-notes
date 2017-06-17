### 实例010 在网页里动态的加载javascript
把一些逻辑独立的javascript脚本单独加载,是一种常见的javascript动态加载技术,jsonp实现的就是这个原理,动态的创建script标签,在资源没有加载进来,就创建script标签,通过src的方式加载外部的js,这样的好处有很多,比如可以减少不必要的javascript脚本文件的加载,以提高网页浏览速度

### 实例代码如下链接所示
[在网页里动态加载js代码](在网页里动态加载javascript.html)

### 实例运行效果
![](http://i.imgur.com/gTmk03Q.gif)

### 具体剖徐
首先要知道script标签的组成,创建script标签,然后在该上面添加属性,s设置type,注意设置动态脚本defer=true,表示的是程序下载完后在解析和执行
示例代码中动态创建javascript的方式来动态的加载javascript,这也是比较合理的一种方式,首先创建一个Javascript的DOM对象,然后为它配置好脚本的地止和类型,最后把它挂载到网页的头部,也就是Head部分,只有当用户单击ok的时候,myjs.js,这个脚本文件才被加载网页进行