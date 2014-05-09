$(document).ready(function() {
    $("#tabs").tabs({

        show: function(event, ui) {

            var lastOpenedPanel = $(this).data("lastOpenedPanel");

            if (!$(this).data("topPositionTab")) {
                $(this).data("topPositionTab", $(ui.panel).position().top)
            }                
            $(ui.panel).hide().fadeIn(500);
            if (lastOpenedPanel) {
                lastOpenedPanel
                    .toggleClass("ui-tabs-hide")
                    .css("position", "absolute")
                    .css("top", $(this).data("topPositionTab") + "px")
                    .fadeOut(500, function() {
                        $(this)
                        .css("position", "");
                    });
            }
            $(this).data("lastOpenedPanel", $(ui.panel));
        }
    });
  $("li").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  })
});

$(window).on('resize', function(){
    if ($(document).Width()>930) {  
      $('.collapse').css("display", "block");
      $('#presentation').css("height", "100%");
      $('.collapse').css("height", "auto");
    }
    else if ($(document).Width()<930) {
      $('.collapse').css("height", "auto");
      open();
    }
});

var animate = false;
var collapsed = false;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  
    if (scroll > 50 && !animate) {
      close();
    }
    else if (scroll < 50){
      open();
    }
});

function close() {
  if ($(window).width()<930) {
    animate  = true;  
    $('.collapse').stop().slideUp(400);
      $('#presentation').stop().animate({height: "42px",}, 400, function(){animate=false; collapsed=true;});
  }
}

function open() {
  if ($(window).width()<930){
    animate  = true;
    $('.collapse').stop().slideDown(400);
    $('#presentation').stop().animate({ height: "137px", }, 400, function(){animate=false; collapsed=false;});
  }
}

