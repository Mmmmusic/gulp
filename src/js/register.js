/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-20 20:43:33
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
var code = document.getElementById("code");

var flag = false;
var timer = null;

// 交互
user.oninput = function(){
  if(user.value.length != 0 && pwd.value.length != 0 && code.value.length == 4){
    $(".btn").css({opacity:1});
    flag = true;
  }else{
    $(".btn").css({opacity:.6});
    flag = false;
  }
}
pwd.oninput = function(){
  if(user.value.length != 0 && pwd.value.length != 0 && code.value.length == 4){
    $(".btn").css({opacity:1});
    flag = true;
  }else{
    $(".btn").css({opacity:.6});
    flag = false;
  }
}
code.oninput = function(){
  if(user.value.length != 0 && pwd.value.length != 0 && code.value.length == 4){
    $(".btn").css({opacity:1});
    flag = true;
  }else{
    $(".btn").css({opacity:.6});
    flag = false;
  }
}
if(user.value.length != 0 && pwd.value.length != 0 && code.value.length == 4){
  $(".btn").css({opacity:1});
  flag = true;
}else{
  $(".btn").css({opacity:.6});
  flag = false;
}


// 创建画布
var ctx = can.getContext("2d");

// 随机数
function random(a,b){
  return Math.floor(Math.random() * (b - a) + 1) + a;
}

var res = "";

draw();
function draw(){
  res = "";
  ctx.clearRect(0,0,300,150);
  // 绘制线
  for(var i = 0;i < 50;i++){
    // 开始绘制
    ctx.beginPath();
    // 随机颜色
    ctx.strokeStyle = "rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+","+random(3,9)/10+")";
    // 随机线位置
    ctx.moveTo(random(0,300),random(-10,160));
    ctx.lineTo(random(0,300),random(-10,160));
    // 绘制
    ctx.stroke();
  }

  // 绘制圆点
  for(var i = 0;i < 25;i++){
    // 开始绘制
    ctx.beginPath();
    // 随机颜色
    ctx.fillStyle = "rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+","+random(1,6)/10+")";
    // 小圆点随机大小
    ctx.arc(random(0,310),random(0,150),random(0,6),0,Math.PI * 2);
    // 绘制图形
    ctx.fill();
  }

  var str = "0123456789abcdefghijklmnopqrstuvwxyz";

  // 随机验证码
  for(var i = 0;i < 4;i++){
    // 随机验证码
    var ran = str[random(0,35)];
    // 循环四次把验证码拼接起来
    res += ran;
    // 文字上基线对齐
    ctx.textBaseline = "hanging"
    // 随机颜色
    ctx.fillStyle = "rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+","+ 1 +")";
    // 字体随机大小
    ctx.font = random(50,100) + "px 微软雅黑";
    // 绘制文字
    //           字体   x        y    // 文字基线
    ctx.fillText(ran,50 + i * 50,50);
  }
}

$("#can").tap(function(){
  draw();
});
    
// 注册按钮
$(".btn").tap(function(){
  if(flag){

    if(res == code.value){
      alert("验证码正确");
      if(ema.test(user.value) || phone.test(user.value) || users.test(user.value)){
        // 用户名是否合法
        console.log("符合规范");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
            if(xhr.responseText == "yes"){
              console.log("用户名未被使用");

              // 发送注册请求
              var xhr1 = new XMLHttpRequest();
              xhr1.onreadystatechange = function(){
                if(xhr1.readyState === 4 && xhr1.status === 200){
                  if(xhr1.responseText === "yes"){
                    alert("注册成功");
                    window.location.href = "login.html";
                    user.value = "";
                    code.value = "";
                  }else{
                    alert("注册失败，请检查网络原因");
                  }
                }
              }
              xhr1.open("GET","php/add.php?username="+user.value+"&password="+pwd.value + "");
              xhr1.send();

            }else{
              console.log("用户名已存在");
            }
          }
        }
        xhr.open("GET","php/isNo.php?username="+user.value+"");
        xhr.send();
      }else{
        alert("不符合规范,用户名最少六位");
      }
      }else{
        alert("验证码错误");
        draw();
      }

  }
});
   