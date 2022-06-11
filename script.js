const pipe = document.querySelector('#pipe')
const mario = document.querySelector('#mario')
let pipePosition = null
let marioPosition = null
let score = 0
$('.nuvem').addClass('nuvem_animation')
const interval = setInterval(() => {
    if (pipePosition < 80 && marioPosition < 80 && pipePosition > 0) {
        clearInterval(interval)
    } else {
        ++score
        $('#number').html(score)
    }

}, 1000);
setInterval(() => {
    pipePosition = pipe.offsetLeft
    marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    if (pipePosition < 80 && marioPosition < 80 && pipePosition > 0) {
        pipe.classList.remove('pipe')
        pipe.style.left = `${pipePosition}px`
        mario.style.bottom = `${marioPosition}px`
        mario.classList.remove('mario_jump_animation')
        mario.src = './images/game-over.png'
        mario.style.width = '55px'
        mario.style.marginLeft = '22px'
        $('.nuvem').removeClass('nuvem_animation')
        $('#game-over').css('display', 'flex')
    }
}, 10);

$('body').keydown(function (e) {
    if (e.keyCode == 32) {
        $('#mario').addClass('mario_jump_animation')
        setTimeout(() => {
            $('#mario').removeClass('mario_jump_animation')
        }, 500);
    }
})
$('#no_option').click(function () {
    location.reload()
})
$('#yes_option').click(function () {
    window.location.href = 'https://www.google.com/'
})