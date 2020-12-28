document.addEventListener("DOMContentLoaded", function(){
    const screen_width = screen.width;
    if (screen_width > 1279){
    let main = document.querySelectorAll(".nav-iem");
    let summary = 0;
    main.forEach(function(item){
                 summary = summary + $(item).width();
                 });
    main.forEach(function(item){
                 item.style.marginLeft = (screen_width - summary) / 7 + "px";

    });
    }

    else if ( screen_width <= 320){
        let main = document.querySelectorAll(".nav-iem");
        let summary = 0;
        main.forEach(function(item){
            item.style.marginLeft = screen_width * 1.2 / 7 + "px";

        });
    }

    else if (320 < screen_width <= 425){
        let main = document.querySelectorAll(".nav-iem");
        let summary = 0;
        main.forEach(function(item){
            item.style.marginLeft = screen_width  / 7 + "px";

        });
    }

    else if (425 < screen_width < 769){
        let main = document.querySelectorAll(".nav-iem");
        let summary = 0;
        main.forEach(function(item){
            item.style.marginLeft = screen_width * 0.5 / 7 + "px";

        });
    }

    else if (1023 < screen_width <= 1280){
        let main = document.querySelectorAll(".nav-iem");
        let summary = 0;
        main.forEach(function(item){
            item.style.marginLeft = screen_width * 0.3 / 7 + "px";

        });
    }
    if (screen_width === 768){
        let main = document.querySelectorAll(".nav-iem");
        main.forEach(function(item){
            item.style.marginLeft = screen_width * 0.5 / 7 + "px";

        });
    }
    if (screen_width === 1024){
        let main = document.querySelectorAll(".nav-iem");
        main.forEach(function(item){
            item.style.marginLeft = screen_width * 0.4 / 7 + "px";

        });
    }


});

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$('.to-down-btn').on('click', function(){
    let target = $(this).data('target');
    let pos = $(target).offset().top;
  $('html, body').animate({'scrollTop': pos - screen.height * 0.09}, 400);
});

$('.nav-link').on('click', function(){
    let target = $(this).data('target');
    let pos = $(target).offset().top;
  $('html, body').animate({'scrollTop': pos - screen.height * 0.09}, 400);
});
