const left = document.getElementById('left')
const right = document.getElementById('right')
const imgs = document.querySelectorAll('.img')
const texts = document.querySelectorAll('.content1')
const imagery = document.getElementById('slider')
const textslider = document.getElementById('textslider')
var counter = 1
const width = 848
const widthtext = 532.49
console.log(widthtext);
imagery.style.transform = 'translateX(' + (-width * counter) + 'px)'
textslider.style.transform = 'translateX(' + (-widthtext * counter) + 'px)'

right.addEventListener('click', function () {
    if (counter >= imgs.length -1) return;
    imagery.style.transition = 'transform .2s ease-in-out';
    textslider.style.transition = 'transform .2s ease-in-out';
    counter++
    imagery.style.transform = 'translateX(' + (-width * counter) + 'px)'
    textslider.style.transform = 'translateX(' + (-widthtext * counter) + 'px)'
    console.log(counter);
})
left.addEventListener('click', function () {
    if (counter <= 0) return;
    imagery.style.transition = 'transform .2s ease-in-out';
    textslider.style.transition = 'transform .2s ease-in-out';
    counter--
    imagery.style.transform = 'translateX(' + (-width * counter) + 'px)'
    textslider.style.transform = 'translateX(' + (-widthtext * counter) + 'px)'
    console.log(counter);
})

imagery.addEventListener('transitionend', function () {
    if (imgs[counter].id === 'img1copy' && texts[counter].id == 'cont1copy') {
        imagery.style.transition = 'none'
        textslider.style.transition = 'none';
        counter = imgs.length - 4
        imagery.style.transform = 'translateX(' + (-width * counter) + 'px)'
        textslider.style.transform = 'translateX(' + (-widthtext * counter) + 'px)'
        console.log(counter + 'is the value of counter');
    }
    if (imgs[counter].id === 'img3copy' && texts[counter].id == 'cont3copy') {
        imagery.style.transition = 'none'
        textslider.style.transition = 'none';
        counter = imgs.length - 2
        imagery.style.transform = 'translateX(' + (-width * counter) + 'px)'
        textslider.style.transform = 'translateX(' + (-widthtext * counter) + 'px)'
        console.log(counter + 'is the value of counter');
    }

})

