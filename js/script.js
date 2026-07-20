$(function(){

    let current = 0;

    const slide = $(".slide");

    setInterval(function(){

        slide.eq(current).fadeOut(800).removeClass("active");

        current++;

        if(current >= slide.length){

            current = 0;

        }

        slide.eq(current).fadeIn(800).addClass("active");

    },3000);

});