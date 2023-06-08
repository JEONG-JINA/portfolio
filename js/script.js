$(function(){
    //scroll
    $(window).scroll(function(){
        var win_h = $(window).innerHeight();
        var scr_top = $(window).scrollTop();

        if(scr_top > win_h) {
            $("header.fd").stop().fadeIn(300);
            side_quick();
        }else {
            $("header.fd").stop().fadeOut(300);
            $(".quick_wrap").stop().fadeOut(300);
        }
    });


    //resize
    var win_w = $(window).outerWidth();

    if (win_w <= 1024) {
        _mobile();
    }else {
        _pc();
    }

    $(window).resize(function(){
        var win_w = $(window).outerWidth();

        if (win_w <= 1024) {
            _mobile();
        }else {
            _pc();
        }
    });

    function _mobile() {
        $(".section_about .title").insertBefore(".section_about .content .about_desc .career");
        $(".section_about .contact").insertAfter(".section_about .content .about_desc .certificate");
    }

    function _pc() {
        $(".section_about .title").insertBefore(".section_about .content");
        $(".section_about .contact").insertBefore(".section_about .content .about_desc .career");
    }
    

    //intro
    $("#intro .title .fadeTxt").addClass("active");


    //project-list
    $(".project-list .tab-btn button").click(function(){
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");

        var dataName = $(this).attr("data-name");
        $(".project-list .pjBox").stop().hide();
        $(".project-list ." + dataName).stop().show();
    });


    //퀵메뉴
    function side_quick() {
        $(".quick_wrap").stop().fadeIn(300);
        
        //탑버튼
        $(".scroll-top-btn").click(function(){
            $("html").stop().animate({scrollTop: 0}, 1000);
        });
    }
});


//메인 백그라운드 효과
const sections = document.querySelectorAll('.section');

let config = {
    rootMargin: '0px',
    threshold: 0
};
  
let observer = new IntersectionObserver((entries) => {
    //console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        } 
    });
}, config);
  
sections.forEach(section => {
    observer.observe(section);
});
  
function intersectionHandler(entry) {
    const current = document.querySelector('.section.active');
    const next = entry.target;
  
    if(current) {
        current.classList.remove('active');
    }
    if(next) {
        next.classList.add('active');
        document.body.style.setProperty("--intro-bg-color", next.dataset.bgcolor);
    }
}