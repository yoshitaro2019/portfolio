// ふわっと表示

jQuery(function($){
  $(function(){
    $(window).scroll(function (){
      $('.fadein01').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
          $(this).addClass('scrollin');
        }
      });
    });
  });
});




// wavify

$(function(){
  $('#wave').wavify({
    height: 100,
    bones: 3,
    amplitude: 40,
    color: '#0bd',
    speed: .1
  });
});



// ハンバーガーメニュー
$(function(){
  $(".btn-gnavi").on("click",function(){
    var rightVal = 0;
    if($(this).hasClass("open")){
      rightVal = -375;
      $(this).removeClass("open");
    }
    else {
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    },300);

  });
});


// ハンバーガーメニューのリンククリック時のアニメーション

$(function(){
  $(".global-navi-li").on("click",function(){
    var rightVal = 0;

    if($(".btn-gnavi").hasClass("open")){
      rightVal = -375;
      $(".btn-gnavi").removeClass("open");
    }
    else {
      $(".btn-gnavi").addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    },300);
    
  });
});