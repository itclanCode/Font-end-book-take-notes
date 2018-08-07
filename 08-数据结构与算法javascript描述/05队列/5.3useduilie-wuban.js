/**
 * 
 * @authors 随笔川迹 (itclanCode@163.com)
 * @date    2018-05-14 15:43:56
 * @version $Id$
 * @weChatPublicId ((itclanCoder))
 * @QQGroup ((643468880))
 * @PersonWeChatId ((suibichuanji))
 * @PersonQQ ((1046678249))
 * @link ((https://juejin.im/post/5a005392518825295f5d53c8))
 * @describe 
 */
/*
 * @constructor Dancer 构造器函数 
 * @param {String} name,sex
 * @desc 将舞者信息都被存储在一个Dancer对象中
 * 
 */
/*var fs = require("fs");
function Dancer(name, sex) {
    this.name = names;
    this.sex = sex;
}*/
/*
 * @function getDancers
 * @params males,females
 * @desc 将舞者信息从文件中读到程序中来
 */
/*var dataArr = [
    {
		"F":"Allison",
		"M":"Frank Optiz",
		"M":"Clayton Ruff",
		"M":"Clayton Ruff",
		"F":"Raymond Williams",
		"M":"Bryan Frazer",
		"M":"Danny Martin",
		"F":"Aurora Adney"
    }
]
function getDancers(males, females) {
    var names = dataArr[0].split(",");
    for (var i = 0; i<names.length; ++i) {
        names[i] = names[i].trim("");
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split("");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}*/
/*
 
   desc:舞者的姓名被从文件读入数组,然后trim()函数除去了每行字符串后的空格,第二个循环将每行字符串按性别和姓名分成两部分存入一个数组,然后根据性别,将舞者加入不同的队列
   下面是一个函数将男性和女性组成舞伴,并且宣布配对结果

*/
/*function dance(males, females) {
    print("The dance partners are:\n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        pustr("Female dancer is:" + person.name);
        person = males.dequeue();
        console.log("add the male dancer is:" + person.name);
    }
    print();
}
getDancers();
dance();*/
var fs = require("fs");
function Queue() {
    this.dataStore = {};
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore[0];
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    var names = fs.readFile("dancers.txt").split("\n");
    for (var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split("");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            femaleDancers.enqueue(new Dancer(name, sex));
        } else {
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    print("The dance partners are:\n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        putstr('Female dancer is' + person.name);
        person = males.dequeue();
        print("and the male dance is:" + person.name);
    }
    print();
}
// 测试程序
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + "is waiting to dance");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + "is waiting to dance");
}