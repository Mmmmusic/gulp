$(function () {

  // 左右滚动
  var zyIsc = new iScroll(conBody, {
    snap: true,
    hScrollbar: false,
    snapThreshold: 10,
    vScroll:false,
    bounce:false,
    checkDOMChanges: true,
    onScrollEnd: function () {
      $(".con-header>div").eq(this.currPageX).addClass("active")
      $(".con-header>div").eq(this.currPageX).siblings().removeClass("active")
    }
  })

  $(".con-header>div").on("tap", function () {
    zyIsc.scrollToPage($(this).index(), 0, 300)
  })

  var fxIsc = new iScroll(bdFx, {
    vScrollbar: false,
    checkDOMChanges: true,
  })

  var fxIsc = new iScroll(bdTw, {
    vScrollbar: false,
    checkDOMChanges: true,
  })
})