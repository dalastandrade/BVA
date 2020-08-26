
let slick = require('slick-carousel');

$(".product-slider").slick({
 
    // normal options...
    infinite: true,
    arrows:true,
    slidesToShow: 1,
    asNavFor: '.product-slider-nav',
    prevArrow:"<button type='button' class='slick-prev'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z' transform=' translate(15,0)'></svg></button>",
    nextArrow:"<button type='button' class='slick-next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z ' transform='translate(85,100) rotate(180) '></svg></button>"
});

$(".product-slider-nav").slick({
 
    // normal options...
    infinite: true,
    arrows:false,
    slidesToShow: 3,
    asNavFor: '.product-slider',
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
   
});

$(".homepage-product-slider").slick({
    infinite: true,
    arrows:true,
    slidesToShow: 3,
    lazyLoad: 'ondemand',
    prevArrow:"<button type='button' class='slick-prev'><svg viewbox='0 0 100 100'><path class='arrow' d='M 25,0 L 30,5 L 10,25 L 30,45 L 25,50 L 0,25 Z ' transform='  translate(30, 25)'></svg></button>",
    nextArrow:"<button type='button' class='slick-next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 25,0 L 30,5 L 10,25 L 30,45 L 25,50 L 0,25 Z  ' transform='translate(70,80) rotate(180) '></svg></button>"
});

$(".swatch-slider").slick({
    infinite: false,
    arrows:true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<div class='prev-next-button previous'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z' transform=' translate(15,0)'></svg></div>",
    nextArrow:"<div class='prev-next-button next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z 'transform='translate(85,100) rotate(180) '></svg></div>",
    variableWidth: true
});

// Select A Size
    const atc = document.getElementById('productAddToCart');
    const sizeSelect = document.getElementsByClassName('productSize');
    var x;
    for(x = 0; x < sizeSelect.length; x++){
      sizeSelect[x].checked = false;
      sizeSelect[x].addEventListener("click", addToCart);
    }  
    
    function addToCart() {
      atc.disabled = false; 
      atc.innerHTML = "Add To Cart";
    }

// Product Tooltip
    jQuery("[data-toggle='tooltip']").tooltip({
   
    })
    
