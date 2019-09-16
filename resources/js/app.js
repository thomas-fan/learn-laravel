require('./bootstrap');

$('.dropdown').on('click', function (e) {
  e.stopPropagation()
  $('.dropdown-menu').css({'display': 'block'})
})
$('body').on('click', function () {
  $('.dropdown-menu').css({'display': 'none'})
})
