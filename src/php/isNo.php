<?php
  
  // 连接数据库
  $mysqli = new mysqli("127.0.0.1:3306","root","root","rh");

  // 接收数据
  $username = $_GET["username"];

  // 查询数据
  $res = $mysqli -> query("select username from user where username = '$username';");

  $arr = $res -> fetch_all(MYSQLI_ASSOC);

  // 条件判断
  if($arr == null){
    echo "yes";
  }else{
    echo "no";
  }

?>