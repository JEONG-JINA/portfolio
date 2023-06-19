const components = document.querySelectorAll('.component');

components.forEach(function(el) {
    const include = el.getAttribute('data-include');

    fetch(include)
    .then(res => res.text())
    .then(data => {
        el.innerHTML = data;
        getScript();
    });
});


function getScript() {
    //퀵메뉴
    window.addEventListener('scroll', function() {
        var scr_top = window.scrollY || document.documentElement.scrollTop;
    
        if (scr_top > win_h) {
            quickMenu();
        } else {
            const quickWrap = document.querySelector('.quick_wrap');
            quickWrap.classList.remove('on');
        }
    });

    function quickMenu() {
        const quickWrap = document.querySelector('.quick_wrap');
        const scrTopBtn = document.querySelector('.scroll-top-btn');

        quickWrap.classList.add('on');

        scrTopBtn.addEventListener('click', function() {
            function scrollToTop() {
                const scrollStep = -window.scrollY / (1000 / 20);
                const scrollInterval = setInterval(function() {
                    if (window.scrollY !== 0) {
                        window.scrollBy(0, scrollStep);
                    } else {
                        clearInterval(scrollInterval);
                    }
                }, 20);
            }
            scrollToTop();
        });
    }
}