<?php 

  // 连接数据库
  $mysqli = new mysqli("127.0.0.1:3306","root","root","rh");

  // 接收数据
  $username = $_GET["username"];
  $password = $_GET["password"];

  // 数据库查询数据
  $res = $mysqli -> query("select * from user where username = '$username' and password = '$password'");

  $arr = $res->fetch_all(MYSQLI_ASSOC);

  if($arr == null){
    echo "yes";
  }else{
    echo "no";
  }

?>