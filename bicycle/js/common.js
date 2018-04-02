
var slider = tns({
    container:                   '.js_container',
    items:                       1,
    slideBy:                     'page',
    autoplay:                    false,
    axis:	                     "horizontal",
    mouseDrag:                   true,
    swipeAngle:                  false,
    arrowKeys:                   true,
    navContainer:                ".js_controls",
    autoplayButtonOutput:        false,
    autoplayResetOnVisibility:   false,
    controls:                    false,
  });

var btn = document.querySelector('.js-btn');
var menu = document.querySelector('.nav_wraper-mobile')

function init() {
    btn.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        btn.classList.toggle('menu-close');
    });
}
document.addEventListener('DOMContentLoaded', init);