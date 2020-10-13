let slick = require('slick-carousel');

if (window.location.href.indexOf("products") > -1) {
$(".swatch-slider").slick({
  infinite: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  prevArrow: "<div class='prev-next-button previous'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z' transform=' translate(15,0)'></svg></div>",
  nextArrow: "<div class='prev-next-button next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z 'transform='translate(85,100) rotate(180) '></svg></div>",
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Select A Size
const atc = document.getElementById('productAddToCart');
const sizeSelect = document.getElementsByClassName('productSize');
var x;
for (x = 0; x < sizeSelect.length; x++) {
  sizeSelect[x].checked = false;
  sizeSelect[x].addEventListener("click", addToCartSelectSize);
}

function addToCartSelectSize() {
  atc.disabled = false;
  atc.innerHTML = "Add To Cart";
}

// Product Tooltip
jQuery("[data-toggle='tooltip']").tooltip();

var lastClick;
var accordianActions = document.querySelectorAll('[data-accordian-action]');
var accordianTargets = document.querySelectorAll('[data-accordian-target]');

var hideTargets = function () {
  for (var i = 0; i < accordianTargets.length; i++) {
    var accordianTarget = accordianTargets[i];
    accordianTarget.style.display = 'none';
  }
};

var showTarget = function (targetSelector) {
  var target = document.querySelector(targetSelector);
  target.style.display = 'block';
};

hideTargets();

for (var i = 0; i < accordianActions.length; i++) {
  var accordianAction = accordianActions[i];
  accordianAction.addEventListener('click', function (e) {
    e.preventDefault();
    hideTargets();
    if (lastClick !== e.currentTarget) {
      showTarget(e.currentTarget.getAttribute('href'));
      lastClick = e.currentTarget;
    } else {
      lastClick = null;
    }
  });
}
}


