let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let myname = document.getElementById('name');


window.onscroll = function () {
    let val = scrollY
    stars.style.left = val + 'px';
    moon.style.top = val * 3 + 'px';
    if (val >= 158) {
        moon.style.display = 'none'
        document.querySelector('.main').style.background = 'rgb(10 146 183 / 30%)';
    }
    else {
        document.querySelector('.main').style.background = '#200016';
        moon.style.display = 'inline'
    }
    mountains3.style.top = val * 4 + 'px';
    mountains4.style.top = val * 3 + 'px';
    river.style.left = val + 'px';
    boat.style.left = val + 'px';
    if (val <= 68) {
        myname.style.fontSize = val + 'px'
    }



}
