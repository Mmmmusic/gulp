$(function () {
  $("body").append(`
  <div id="pub-footer">
    <a>
      <i class="iconfont">&#xe607;</i>
      <p>
        首页
      </p>
    </a>
    <a>
      <i class="iconfont">&#xe6b8;</i>
      <p>
        分类
      </p>
    </a>
    <a>
      <i class="iconfont">&#xe686;</i>
      <p>
        社区
      </p>
    </a>
    <a>
      <i class="iconfont">&#xe617;</i>
      <p>
        购物车
      </p>
    </a>
    <a>
      <i class="iconfont">&#xe649;</i>
      <p>
        我的
      </p>
    </a>
  </div>
  `);

  $("body").prepend(`
  <div id="pub-header">
  <a class="header-left">
    <i class="iconfont">&#xe60d</i>
  </a>
  <a class="header-center">
    <i class="iconfont">&#xe607;</i>
    <span class="hc-text">
      阅居
    </span>
  </a>
  <a class="header-right">
    <i class="iconfont">&#xe646;</i>
  </a>
</div>
  `)
  $("#pub-footer a").eq(0).css({
    color: "#0eb852"
  });
  $("#pub-footer a").eq(0).find("i").css({
    color: "#0eb852"
  })
  $("#pub-footer a").on("tap", function () {
    $(this).css({
      color: "#0eb852"
    });
    $(this).find("i").css({
      color: "#0eb852"
    })

    $(this).siblings().css({
      color: "#000"
    });
    $(this).siblings().find("i").css({
      color: "#000"
    })

    if ($.trim($(this).find("p").text()) == "首页") {
      $("#pub-header .hc-text").text("阅居")
    } else if ($.trim($(this).find("p").text()) == "我的") {
      $("#pub-header .hc-text").text("我的")
    } else {
      $("#pub-header .hc-text").text($(this).find("p").text())
    }
  })

  $("#pub-header .hc-text").bind("DOMNodeInserted", function (e) {
    if ($.trim($(this).text()) == "阅居") {
      $(".header-left").html('<i class="iconfont">&#xe60d</i>')
      $(".header-right").html('<i class="iconfont">&#xe646;</i>')
    } else if ($.trim($(this).text()) == "分类") {
      $(".header-left").html('<i class="iconfont">&#xe600</i>返回')
      $(".header-right").html('<i class="iconfont">&#xe646;</i>')
    } else if ($.trim($(this).text()) == "我的") {
      $(".header-left").html('<i class="iconfont">&#xe600</i>返回')
      $(".header-right").html('<i class="iconfont">&#xe615;</i>')
    }else{
      $(".header-left").html('<i class="iconfont">&#xe600</i>返回')
      $(".header-right").html('<i class="iconfont">&#xe637;</i>')
    }
  })
})