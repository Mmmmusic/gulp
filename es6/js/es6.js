for (let i = 0; i < list.children.length; i++) {
  list.children[i].onclick = function () {
    list.children[i].style.backgroundColor = '#e0244d';
  }
}

// 箭头函数
var fn = x => x;
var fn = () => x;

var fn=(a,b)=>a+b;

var fn= ()=>{
  alert("hello");
}
fn();

// ？？？
var person=(name,age=20)=>({name:name,age:age});

var obj = {
  name:"veb",
  say:()=>{
    console.log(this.name);
  }
}
obj.say();

// set:类数组,成员唯一
var arr = [1,2,2,3,3,4,1,5];
var s = new Set(arr);
var newArr = [...s];
console.log(newArr);

// 面向对象 class 写法
{
  class Person{
    // 构造函数的私有属性
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    // 相当于原型对象上的方法
    info(){
      console.log(this.name,this.age);
    }
  }
  var p = new Person("veb",21);
  p.info();
}

// 展开运算符写法
var arr = [164,132,48,13,2];
// 把数组展开
var resMax = Math.max(...arr);
var resMin = Math.min(...arr);
console.log("最大值："+resMax);
console.log("最小值："+resMin);

// 浅拷贝
var obj = {
  name:"ani",
  age:20
};

// 会把obj的键值对赋给newObj
// var newObj = {
//   ...obj,
//   sex:"男"
// }
// console.log(newObj);

// promise对象
function fn(x){
  return new Promise(function(resolve,reject){

    setTimeout(()=>{
      resolve(x);
    });

  });
}

fn(10)
.then((a)=>{
  console.log(a);
  return a;
})
.then((b)=>{
  return fn(b + 20);
})
.then((c)=>{
  console.log(c);
});

// promise ajax
var ajax = (url)=>{
  return new Promise((resolve,reject)=>{

    // ajax使用
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.send();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === 4 && xhr.status === 200){
        resolve(xhr.responseText);
      }
    }

  });
}

ajax("index.php?x=10").then((res)=>{
  console.log("第一次请求结果",res);
  return res;
}).then((res)=>{
  return ajax("index.php?x="+(parseInt(res)+10));
}).then((res)=>{
  console.log("第二次请求结果",res);
});

// generator 函数
// ???
function* fn(){

  console.log(1+1);
  yield 1;
  console.log(2+2)
  yield 2;
  console.log(3+3)
  return 3;

}
var g=fn();
