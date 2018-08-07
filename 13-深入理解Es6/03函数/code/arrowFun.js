/**
 * 
 * @authors 随笔川迹 (itclanCode@163.com)
 * @date    2018-05-16 23:52:47
 * @version $Id$
 * @weChatPublicId ((itclanCoder))
 * @QQGroup ((643468880))
 * @PersonWeChatId ((suibichuanji))
 * @PersonQQ ((1046678249))
 * @link ((https://juejin.im/post/5a005392518825295f5d53c8))
 * @describe 
 */
// Es6中的箭头函数,当只有一个参数时
let reflect = value => {
	return value;
}
console.log(typeof reflect("weclone to itclancoder public Number"));
console.log(reflect("weclone to itclancoder public Number"));
// Es5的写法
/*let reflect = function(value){
    return value;
}
console.log(reflect("weclone to itclancoder public Number"));*/
