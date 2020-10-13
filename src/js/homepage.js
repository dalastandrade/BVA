window.addEventListener("orientationchange", function(event) {
if (window.innerWidth > 768) {
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
  plusSlides(1)
}, 5000);

var prevSlide = document.querySelectorAll(".prev-text"); // this element contains more than 1 DOMs.
for (var i = 0; i < prevSlide.length; i++) {
  prevSlide[i].onclick = function () { plusSlides(-1) };
}

var nextSlide = document.querySelectorAll(".next-text"); // this element contains more than 1 DOMs.
for (var i = 0; i < nextSlide.length; i++) {
  nextSlide[i].onclick = function () { plusSlides(1) };
}
}
});
menuInit();

$('#menu').find('li').has('ul').children('a').on('click', dropdownMenuFunctions);
$('#footerMenu').find('li').has('ul').children('a').on('click', dropdownMenuFunctions);
$('#collectionMenu').find('li').has('ul').children('a').on('click', dropdownMenuFunctions);


$("#show-sidebar").on('click', togglePageWrapper);
$("#close-sidebar").on('click', removeTogglePageWrapper);

$("#show-cartDrawer").on('click', function () {
  $(this).parent().addClass("toggled");
  $("#overlay").addClass("block-display");
  $('#tlf').css('overflow', 'hidden');
});

$("#close-cartDrawer").on('click', function () {
  $(this).parent().parent().parent().parent().removeClass("toggled");
  $("#overlay").removeClass("block-display");
  $('#tlf').css('overflow', 'scroll');
});

$("#overlay").on('click', function () {
  $("#close-cartDrawer").parent().parent().parent().parent().removeClass("toggled");
  $(this).removeClass("block-display");
  $('#tlf').css('overflow', 'scroll');
});

$("#show-help").on('click', togglePageWrapper);
$("#close-help").on('click', removeTogglePageWrapper);

$("#show-collection-nav").on('click', togglePageWrapper);
$("#close-collection-nav").on('click', removeTogglePageWrapper);


function togglePageWrapper() {
  $(this).parent().addClass("toggled");
}

function removeTogglePageWrapper() {
  $(this).parent().parent().parent().parent().removeClass("toggled");
}

function dropdownMenuFunctions() {
  $(this).parent('li').toggleClass('open').children('ul').collapse('toggle');
  $(this).children('span').toggleClass('rotate');
  $(this).parent('li').siblings().removeClass('open').children('ul.in').collapse('hide');
}

function menuInit() {
  $('#menu li').not('.active').has('ul').children('ul').addClass('collapse');
  $('#footerMenu li').not('.active').has('ul').children('ul').addClass('collapse');
  $('#collectionMenu li').not('.active').has('ul').children('ul').addClass('collapse');
}



