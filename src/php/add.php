<?php

  // 查询数据库
  $mysqli = new mysqli("127.0.0.1:3306","root","root","rh");
  // 接收数据
  $username = $_GET["username"];
  $password = $_GET["password"];

  // 查询数据
  $res = $mysqli -> query("select username from user where username = '$username'");
  $arr = $res -> fetch_all(MYSQLI_ASSOC);

  // 如果数据不存在
  if($arr == null){
    echo "yes";
    $result = $mysqli -> query("insert into user (username,password) values ('$username','$password')");
  }else{
    echo "no";
  }

?>
