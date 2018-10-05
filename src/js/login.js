/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-20 14:59:54
 * @version $Id$
 */

// 邮箱验证
var ema = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
// 手机号验证
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
// 用户名验证
var users = /^[a-zA-Z0-9_]{4,15}$/;

var user = document.getElementById("user");
var pwd = document.getElementById("pwd");

var flag = false;

// 交互
user.oninput = function(){
  if(user.value.length != 0 && pwd.value.length != 0){
    $(".login").css({opacity:1});
    flag = true;
  }else{
    $(".login").css({opacity:.6});
    flag = false;
  }
}
pwd.oninput = function(){
  if(user.value.length != 0 && pwd.value.length != 0){
    $(".login").css({opacity:1});
    flag = true;
  }else{
    $(".login").css({opacity:.6});
    flag = false;
  }
}
if(user.value.length != 0 && pwd.value.length != 0){
  $(".login").css({opacity:1});
  flag = true;
}else{
  $(".login").css({opacity:.6});
  flag = false;
}

// 登录按钮
$(".login").tap(function(){
  if(flag){
    if(user.value.length < 6){
      console.log("用户名最少为六位字符");
    }else if(((ema.test(user.value) || phone.test(user.value) || users.test(user.value))) && user.value != ""){
      console.log("用户名前端验证完毕");
      // 密码长度判断
      if(pwd.value.length < 6){
        console.log("密码最少为6位字符");
      }else{
        console.log("密码前端验证完毕");
        // 验证通过，发送ajax请求
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
            if(xhr.responseText == "no"){
              alert("登录成功");
              window.location.href = "userCenter.html";
            }else{
              alert("用户名或密码错误");
            }
          }
        }
        xhr.open("GET","php/login.php?username=" + user.value + "&password=" + pwd.value + "",true);
        xhr.send();
      }
    }else{
      console.log("格式不正确");
    }
  }
});