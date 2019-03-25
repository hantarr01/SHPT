 $(document).ready(function(){
    $('.sidenav').sidenav();
  });


const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
overlay1.addEventListener('click', () => {
  search.classList.toggle('active');
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
search.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    setTimeout(() => {
      input.focus();
    }, 200)
  }
})
overlay2.addEventListener('click', (e) => {
  input.value = '';
  input.focus();
  search.classList.remove('searching')
})
document.body.addEventListener('click', (e) => {
  if (!search.contains(e.target) && input.value.length === 0) {
    search.classList.remove('active');
    search.classList.remove('searching');
    input.value = '';
  }
})
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    input.blur();
  }
})
input.addEventListener('input', () => {
  if (input.value.length > 0) {
    search.classList.add('searching')
  } else {
    search.classList.remove('searching')
  }
})
input.value = '';
input.blur();


$(document).ready(function(){
$('.menu li ul').hide ();
$('li li:has(li)').find('a:first').addClass ('arrow');
$('li').hover (
function () {
$(this).addClass('active');
$('ul:first', this).fadeIn ();
},
function () {
$(this).removeClass('active');
$('ul:first', this).fadeOut ();
}
);
});

$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'horizontal',
    speed: 600,
    slideWidth: 300,
    slideHeight: 200,
    startSlide: 0,
    randomStart: false,
    infiniteLoop: true,
    pager:false,
    responsive: true,
    captions: true,
    auto: true,
    pause: 5000,
  });
  });

