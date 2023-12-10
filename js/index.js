document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');

    window.onscroll = function() {
        if (window.pageYOffset > nav.offsetTop) {
            nav.style.position = 'fixed';
            nav.style.top = '0';
        } else {
            nav.style.position = 'sticky';
            nav.style.top = '0';
        }
    };
});