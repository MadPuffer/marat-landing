document.addEventListener("DOMContentLoaded", function(){
    const screen_width = screen.width;
    let main = document.querySelectorAll(".nav-iem");
    let summary = 0;
    main.forEach(function(item){
                 summary = summary + $(item).width();
                 });
    main.forEach(function(item){
                 item.style.marginLeft = (screen_width - summary) / 7 + "px";
                 });
    
});

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$('.to-down-btn').on('click', function(){
  var target = $(this).data('target');
  var pos = $(target).offset().top;
  $('html, body').animate({'scrollTop': pos - screen.height * 0.09}, 400);
});

$('.nav-link').on('click', function(){
  var target = $(this).data('target');
  var pos = $(target).offset().top;
  $('html, body').animate({'scrollTop': pos - screen.height * 0.09}, 400);
});