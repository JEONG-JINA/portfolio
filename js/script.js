const win_w = window.outerWidth;
const win_h = window.innerHeight;


//intro
window.addEventListener('DOMContentLoaded', function() {
    const introTit = document.querySelector('#intro .title .fadeTxt');
    introTit.classList.add('active');
});


//메인 헤더
window.addEventListener('scroll', function() {
    var scr_top = window.scrollY || document.documentElement.scrollTop;
    const fadeHeader = document.querySelector('header.fd');
    
    if (scr_top > win_h) {
        fadeHeader.classList.add('on');
    } else {
        fadeHeader.classList.remove('on');
    }
});


//project-list
const projectList = document.querySelector('.project-list');
const projectTab =  projectList.querySelectorAll('.tab-btn li');
const projectTabBtn =  projectList.querySelectorAll('.tab-btn li button');
const projectBox = projectList.querySelectorAll('.pjBox');

projectTabBtn.forEach(function(item, index) {
    item.addEventListener('click', function() {
        const dataName = item.getAttribute('data-name');

        projectTab.forEach(function(tabItem, tabIndex) {
            tabItem.classList.toggle('on', tabIndex === index);
        });

        projectBox.forEach(function(pjItem) {
            pjItem.style.display = 'none';
        });

        projectList.querySelectorAll('.pjBox.' + dataName).forEach(function(dataItem) {
            dataItem.style.display = 'block';
        });
    });
});


//반응형
const about = document.querySelector('.section_about');
const abtTit = about.querySelector('.title');
const abtContent = about.querySelector('.content')
const contact = abtContent.querySelector('.contact');
const career = abtContent.querySelector('.career');
const certificate = abtContent.querySelector('.certificate');

function resize() {
    const win_w = window.outerWidth;

    if (win_w <= 1023) {
        _mobile();
    } else {
        _pc();
    }
}
resize();

function _mobile() {
    career.parentNode.insertBefore(abtTit, career); //부모 노드.insertBefore(삽입할 노드, 기준 노드)
    certificate.parentNode.insertBefore(contact, null); //맨 끝에 삽입
}

function _pc() {
    abtContent.parentNode.insertBefore(abtTit, abtContent);
    career.parentNode.insertBefore(contact, career);
}

window.addEventListener('resize', function() {
    resize();
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