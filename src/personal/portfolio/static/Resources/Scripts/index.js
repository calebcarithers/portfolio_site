$(document).ready(function() {

    function isTouchDevice() {
        return 'ontouchstart' in document.documentElement;
    }

    if (isTouchDevice()) {

    // Hover effect for project images, description, and arrow buttons
    // [0] -> image
    // [1] -> text

        $('.image-row, .new-image-row').on('touchstart', function() {
            $(this).find(".hover-change")[0].style.background = "#e3e15f";
            if ($(this).find(".hover-change")[1].className !== "hover-change rounded tami") {
                    $(this).find(".hover-change")[1].style.display = "inline-block";
                }
            $(this).find(".hover-change").css({"background":"yellow", "color":"#e3e15f"});
        }).on('touchend', function() {
            $(this).find(".hover-change")[0].style.background = "none";
            $(this).find(".hover-change")[1].style.background = "none";
            $(this).find(".hover-change").css({"background":"none", "color":"black"});
        })

        $('.responsiveText').find('a').each(function() {
            arrowFunctions();
            $(this).on('touchstart', function() {
                $(this).css({"background":"yellow", "color":"#e3e15f"})
            }).on('touchend', function() {
                $(this).css({"background":"none", "color":"blue"})
            })
        })

        $('.arrow-big-view, .arrow-small-view').find('.myButton').on('touchstart', function() {
            $(this).css({"background":"yellow", "color":"#e3e15f"});
        }).on('touchend', function() {
            $(this).css({"background":"none", "color":"black"});
        })

        $('#myname').on('touchstart', () => {
//            $('#myname').addClass("hide");
            $('#imagename').removeClass("hide");
        })

        $('#myname').on('touchend', () => {
            $('#imagename').addClass("hide");
//            $('#myname').removeClass("hide");
        })
    } else {

        $('.image-row, .new-image-row').mouseover(function() {
                $(this).find(".hover-change")[0].style.background = "#e3e15f";

                if ($(this).find(".hover-change")[1].className !== "hover-change rounded tami") {
                    $(this).find(".hover-change")[1].style.display = "inline-block";
                }

                $(this).find(".hover-change").css({"background":"yellow", "color":"#e3e15f"});
        }).mouseout(function() {
                $(this).find(".hover-change")[0].style.background = "none";
                $(this).find(".hover-change")[1].style.background = "none";
                $(this).find(".hover-change").css({"background":"none", "color":"black"});
        })


        $('.responsiveText').find('a').each(function() {
            arrowFunctions();
            $(this).mouseover(function() {
                $(this).css({"background":"yellow", "color":"#e3e15f"});
            }).mouseleave(function() {
                $(this).css({"background":"none", "color":"blue"});
            })
        })

        $('.arrow-big-view, .arrow-small-view').find('.myButton').mouseover(function() {
            $(this).css({"background":"yellow", "color":"#e3e15f"});
        }).on("mouseleave", function() {
            $(this).css({"background":"none", "color":"black"});
        })

        $('#myname').on('mousedown', () => {
//            $('.container').prepend('<div class="row mt-4" id="imagename"><div class="col text-center"><img src="/static/Resources/Photos/Name/pretti_name_smaller.svg" width="270px;"/></div></div>')
//            $('#myname').addClass("hide");
            $('#imagename').removeClass("hide");
        }).on('mouseup', () => {
            $('#imagename').addClass("hide");
//            $('#myname').removeClass("hide");
        }).mouseover(() => {
            $('#myname').css({"cursor":"pointer"})
        });


//        $('#imagename').on('mouseleave', () => {
//            $('.container').prepend('<div class="row mt-3"><div class="col" id="myname"><h1 class="mb-0" style="font-weight: bold; display: inline">caleb carithers</h1></div></div>')
//            $('#imagename').remove();
//        })
    } //end of isTouchDevice function


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Functionality for desktop/mobile layout (popping and adding arrow in correct position)
        var mqBig = window.matchMedia('(min-width: 992px)');
        var mqSmall = window.matchMedia('(max-width: 992px)');

        var mqBigToSmall = window.matchMedia('(max-width: 992px)');
        var mqSmallToBig = window.matchMedia('(min-width: 992px)');

        var myName = document.getElementById("myname");
        var nameImage = document.getElementById("imagename");

        if (mqBig.matches) {
            $("div").remove(".arrow-small-view");
            $(".break-row").css("margin-top", "7.5vh");
            myName.classList.add("text-left");
            nameImage.classList.add("text-left");
            arrowFunctions();
        }

        if (mqSmall.matches) {
            $("div").remove(".arrow-big-view");
            $(".break-row").css("margin-top", "7.5vh");
            myName.classList.add("text-center");
            nameImage.classList.add("text-center");
            arrowFunctions();
        }

        function changeForBig(e) {
            if (e.matches) {
//                $("div").remove(".arrow-big-view");

//                var text = '<div class="col my-col text-center arrow-small-view" style="font-size: 35px; margin-top: 5vh;"><a class="myButton" class="rounded"> &darr;</a></div>';
//                $(".intro-text-row div:eq(0)").after(text);
                console.log("injection happened");
//                $(".break-row").css("margin-top", "7.5vh");
                myName.classList.remove("text-left");
                myName.classList.add("text-center");
                nameImage.classList.remove("text-left");
                nameImage.classList.add("text-center");

                arrowFunctions();
            }
        }

        function changeForSmall(e) {
            if (e.matches) {
//                $("div").remove(".arrow-small-view");

//                var text = '<div class="row no-gutters arrow-big-view"><div class="col my-col text-center" style="font-size: 35px;"><a class="myButton" class="rounded">&darr;</a></div></div>';
//                $(".container div:eq(0)").after(text);
//                $(".break-row").css("margin-top", "7.5vh");
                myName.classList.remove("text-center");
                myName.classList.add("text-left");
                nameImage.classList.remove("text-center");
                nameImage.classList.add("text-left");

                arrowFunctions();
            }
        }

        mqBigToSmall.addListener(changeForBig);
        mqSmallToBig.addListener(changeForSmall);

// Scroll animation effect for arrows
        function arrowFunctions() {

            if (isTouchDevice()) {
                $('.arrow-small-view').find('.myButton').on('touchstart', function() {
                    $(this).css({"background":"yellow", "color":"#e3e15f"});
                }).on('touchend', function() {
                    $(this).css({"background":"none", "color":"black"});
                })
            } else {
                $('.arrow-small-view').find('.myButton').mouseover(function() {
                    $(this).css({"background":"yellow", "color":"#e3e15f", "cursor":"pointer"});
                }).on("mouseleave", function() {
                    $(this).css({"background":"none", "color":"black", "cursor":"default"});
                })
            }


            $('.arrow-small-view').find(".myButton").click(function() {

            if (mqBig.matches){
                $('html, body').animate({
                    scrollTop: $("#scrollToBig").offset().top
                    }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $("#scrollToSmall").offset().top
                    }, 500);
            }
         });
    }
})
///////////////////////////////////////////////////////////////////////////////