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






$(function(){
  $('#wave').wavify({
    height: 100,
    bones: 3,
    amplitude: 40,
    color: '#0bd',
    speed: .1
  });
});


