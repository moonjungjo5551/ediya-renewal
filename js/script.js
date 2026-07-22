//index 제이쿼리
$(function () {

    // ==========================
    // Navigation Hover
    // ==========================
    $(".nav li").hover(function () {
        $(this).stop().animate({
            paddingTop: "8px"
        }, 200);
    }, function () {
        $(this).stop().animate({
            paddingTop: "0px"
        }, 200);
    });


    // ==========================
    // Main Button
    // ==========================
    $(".main_btn").hover(function () {

        $(this).stop().animate({
            width: "240px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            width: "210px"
        }, 250);

    });


    // ==========================
    // Card Hover
    // ==========================
    $(".card_wrap > div").hover(function () {

        $(this).stop().animate({
            marginTop: "-20px"
        }, 300);

    }, function () {

        $(this).stop().animate({
            marginTop: "0px"
        }, 300);

    });


    // ==========================
    // Brand Story Button
    // ==========================
    $(".story_btn").hover(function () {

        $(this).stop().animate({
            paddingLeft: "40px",
            paddingRight: "40px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            paddingLeft: "25px",
            paddingRight: "25px"
        }, 250);

    });


    // ==========================
    // Banner Button
    // ==========================
    $(".banner_btn").hover(function () {

        $(this).stop().animate({
            width: "180px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            width: "150px"
        }, 250);

    });


    // ==========================
    // Notice Button
    // ==========================
    $(".notice_btn").hover(function () {

        $(this).stop().animate({
            paddingLeft: "25px",
            paddingRight: "25px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            paddingLeft: "18px",
            paddingRight: "18px"
        }, 250);

    });


    // ==========================
    // Service Card
    // ==========================
    $(".store_card, .partner_card").hover(function () {

        $(this).stop().animate({
            marginTop: "-15px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            marginTop: "0px"
        }, 250);

    });


    // ==========================
    // Value Card
    // ==========================
    $(".value > div").hover(function () {

        $(this).stop().animate({
            marginTop: "-15px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            marginTop: "0px"
        }, 250);

    });


    // ==========================
    // SNS Hover
    // ==========================
    $(".sns_btn > div").hover(function () {

        $(this).stop().animate({
            marginTop: "-15px"
        }, 250);

    }, function () {

        $(this).stop().animate({
            marginTop: "0px"
        }, 250);

    });


    // ==========================
    // SNS Link
    // ==========================
    $(".blog").click(function () {
        window.open("https://blog.naver.com/ediya-coffee");
    });

    $(".instagram").click(function () {
        window.open("https://www.instagram.com/ediya.coffee");
    });

    $(".facebook").click(function () {
        window.open("https://www.facebook.com/EdiyaCoffee");
    });

    $(".youtube").click(function () {
        window.open("https://www.youtube.com/@ediyacoffee");
    });


    // ==========================
    // Fade In on Scroll
    // ==========================
    $(".card_wrap, .video, .brand_story, .banner, .notice, .service, .value, .sns").css({
        opacity: 0,
        position: "relative",
        top: "40px"
    });

    $(window).on("scroll", function () {

        $(".card_wrap, .video, .brand_story, .banner, .notice, .service, .value, .sns").each(function () {

            let top = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let win = $(window).height();

            if (scroll + win - 120 > top) {

                $(this).stop().animate({
                    opacity: 1,
                    top: 0
                }, 700);

            }

        });

    });

    $(window).trigger("scroll");

});

//beans 제이쿼리
$(function(){

    $(".sub_tab a").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    );

});