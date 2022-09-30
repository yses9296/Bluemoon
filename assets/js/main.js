document.addEventListener("DOMContentLoaded", function(){
    var menu_wrap = document.querySelector('.init_header'),
        menu_icon = document.querySelector('.menu_icon'),
        side_menu = document.querySelector('.side_menu'),
        header_height = menu_wrap.offsetHeight;

    side_menu.style.top = header_height + 'px';

    menu_icon.addEventListener('click', e => {
        e.preventDefault();
        side_menu.classList.toggle('active');
    })


    var intro_cont = document.querySelectorAll('.intro_cont');
    var intro_img = document.querySelectorAll('.intro_img');

    window.addEventListener('scroll', function(){
        var scrollTop =  this.scrollY ;

        intro_cont.forEach((el, idx) => {
            if(scrollTop >= el.offsetTop+500){
                intro_img[idx].classList.add('active');
            }
            else {
                intro_img[idx].classList.remove('active');
            }
        })
    });

});