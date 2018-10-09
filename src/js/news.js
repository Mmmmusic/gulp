/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-09-22 13:07:43
 * @version $Id$
 */

$(function(){

  var view = new iScroll("view",{
    bounce:true,
    vScrollbar:false,
    checkDOMChanges:true,
  });

  $("#pub-header").remove();
  $("#pub-footer a").eq(0).trigger("tap");

  // 滚动新闻
  var newsWrapper = $(".slide-wra");
  var h = $(".slide-wra p").height();
  var slideNewsHeight = $(".slide-wra p").size() * h;
  var timer = null;
  newsWrapper.css("height",slideNewsHeight)
  console.log(h,slideNewsHeight);
  function ani(){
    newsWrapper.animate({marginTop:-h},1000,function(){
    newsWrapper.css({marginTop:0}).find("p").first().appendTo(newsWrapper);
    });
  }

  timer = setInterval(ani,2000);

});
