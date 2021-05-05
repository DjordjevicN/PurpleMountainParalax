
let moon = document.getElementById('moon')
let back = document.getElementById('back')
let mid = document.getElementById('mid')
let front = document.getElementById('front')
let text = document.getElementById('text')

window.addEventListener('scroll', function () {
    let value = window.scrollY
    moon.style.top = value * 0.5 + 'px';
    moon.style.left = value * (-.100) + 'px'
    text.style.right = value * 1.5 + 'px';
    mid.style.top = value * 0.6 + 'px'
    front.style.top = value * 0 + 'px'


})