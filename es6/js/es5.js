"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fn);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _loop = function _loop(i) {
  list.children[i].onclick = function () {
    list.children[i].style.backgroundColor = '#e0244d';
  };
};

for (var i = 0; i < list.children.length; i++) {
  _loop(i);
}

// 箭头函数
var fn = function fn(x) {
  return x;
};
var fn = function fn() {
  return x;
};

var fn = function fn(a, b) {
  return a + b;
};

var fn = function fn() {
  alert("hello");
};
fn();

// ？？？
var person = function person(name) {
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return { name: name, age: age };
};

var obj = {
  name: "veb",
  say: function say() {
    console.log(undefined.name);
  }
};
obj.say();

// set:类数组,成员唯一
var arr = [1, 2, 2, 3, 3, 4, 1, 5];
var s = new Set(arr);
var newArr = [].concat(_toConsumableArray(s));
console.log(newArr);

// 面向对象 class 写法
{
  var Person = function () {
    // 构造函数的私有属性
    function Person(name, age) {
      _classCallCheck(this, Person);

      this.name = name;
      this.age = age;
    }
    // 相当于原型对象上的方法


    _createClass(Person, [{
      key: "info",
      value: function info() {
        console.log(this.name, this.age);
      }
    }]);

    return Person;
  }();

  var p = new Person("veb", 21);
  p.info();
}

// 展开运算符写法
var arr = [164, 132, 48, 13, 2];
// 把数组展开
var resMax = Math.max.apply(Math, arr);
var resMin = Math.min.apply(Math, arr);
console.log("最大值：" + resMax);
console.log("最小值：" + resMin);

// 浅拷贝
var obj = {
  name: "ani",
  age: 20
};

// 会把obj的键值对赋给newObj
// var newObj = {
//   ...obj,
//   sex:"男"
// }
// console.log(newObj);

// promise对象
function fn(x) {
  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      resolve(x);
    });
  });
}

fn(10).then(function (a) {
  console.log(a);
  return a;
}).then(function (b) {
  return fn(b + 20);
}).then(function (c) {
  console.log(c);
});

// promise ajax
var ajax = function ajax(url) {
  return new Promise(function (resolve, reject) {

    // ajax使用
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      }
    };
  });
};

ajax("index.php?x=10").then(function (res) {
  console.log("第一次请求结果", res);
  return res;
}).then(function (res) {
  return ajax("index.php?x=" + (parseInt(res) + 10));
}).then(function (res) {
  console.log("第二次请求结果", res);
});

// generator 函数
// ???
function fn() {
  return regeneratorRuntime.wrap(function fn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:

          console.log(1 + 1);
          _context.next = 3;
          return 1;

        case 3:
          console.log(2 + 2);
          _context.next = 6;
          return 2;

        case 6:
          console.log(3 + 3);
          return _context.abrupt("return", 3);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
var g = fn();
