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
    color: '#31C9D1',
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


// タイトルアニメーション

$(function () {
  $('.h1').textillate({
    loop: false,  
    minDisplayTime: 3000,  
    initialDelay: 500,  
    autoStart: true,  
    in:{
      effect: 'fadeIn',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false
    },  
  });
})
