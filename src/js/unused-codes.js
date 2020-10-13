
  /*   $.get(window.location.href + '.json' , function(productData) {
        console.log(productData, "Product Data");
        console.log(productData.product.tags, "Product Tags");
        if (productData.product.tags.search(/\bWOMENS\b/) >= 0) {
            console.log("found it!")
            womensSwatches();
            setTimeout(function(){startSlider()}, 3000);
        };

        if (productData.product.tags.search(/\bMENS\b/) >= 0) {
            console.log("found it!")
            mensSwatches();
            setTimeout(function(){startSlider()}, 3000);
        };

        });

        function womensSwatches(){
            var iii;
            let pages = 15;
            let collectionURL = `../../collections/all-products/womens`;
            let productTitle = document.getElementById('productheader').innerHTML;
            let newText = '#' + productTitle.split(/\s/).join('');
            let swatchSlider = document.getElementById('swatchsliders');
            // Now create and append to iDiv
            var innerDiv = document.createElement('div');
            innerDiv.className = 'swatch-slider';
            swatchSlider.appendChild(innerDiv)
            for (iii = 1; iii <= pages; iii++) {
            $.get(collectionURL + '?page=' + iii, function(newData) {

                $(newData).find(newText).each(function(){  


                    this.classList.add("swatch-gallery");
                    $(this).children().css({"width": "60px"});
                    $(this).children().attr({'data-toggle': "tooltip", 'data-placement':"bottom",'data-original-title':"demo"});
                    innerDiv.append(this);
                    
                });

            });

            
            }
        }


        function mensSwatches(){
            var iii;
            let pages = 15;
            let collectionURL = `../../collections/all-products/mens`;
            let productTitle = document.getElementById('productheader').innerHTML;
            let newText = '#' + productTitle.split(/\s/).join('');
            let swatchSlider = document.getElementById('swatchsliders');
            // Now create and append to iDiv
            var innerDiv = document.createElement('div');
            innerDiv.className = 'swatch-slider';
            swatchSlider.appendChild(innerDiv)
            for (iii = 1; iii <= pages; iii++) {
            $.get(collectionURL + '?page=' + iii, function(newData) {

                $(newData).find(newText).each(function(){  


                    this.classList.add("swatch-gallery");
                    $(this).children().css({"width": "60px"});
                    $(this).children().attr({'data-toggle': "tooltip", 'data-placement':"bottom",'data-original-title':"demo"});
                    innerDiv.append(this);
                    
                });

            });

            
            }
            
        }
 
        
            function startSlider() {
            $('.swatch-slider').not('.slick-initialized').slick({
                    infinite: false,
                    arrows:true,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    prevArrow:"<div class='prev-next-button previous'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z' transform=' translate(15,0)'></svg></div>",
                    nextArrow:"<div class='prev-next-button next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z 'transform='translate(85,100) rotate(180) '></svg></div>",
                    variableWidth: true
                });
            }
        
             */

             {% comment %}
      <div id="data" class="row">

        </div>

        <script>
          
function doSomething(x){
    console.log(x.products);
    
    var div = document.getElementById('data');
 
    for(var i = 0;i < x.products.length; i++) {
       div.innerHTML = div.innerHTML + `<div class='col-md-4 mix ` + x.products[i].tags + `'>
                          <div class="product-item">
                           <a href="https://tlfapparel.com/products/` + x.products[i].handle + `">
                             <img src="` + x.products[i].images[0].src + `" class="img-fluid ls-is-cached lazyloaded">
                         </a>
                     <p class='inner' id="+i+">`+ x.products[i].title + `</p>
                     
                     </div>
                      </div>`
     }
    
  }
 
 let x = fetch('https://tlfapparel.com/collections/all-products/products.json?tag=womens&limit=500')
     .then(data => data.json())
     .then(success => doSomething(success));


    
        </script>




<body style="">
    <form class="controls" id="Filters">
    <div class="controls">
      <fieldset>
      <button type="button" class="control filter" data-filter="all">All</button>
      <button type="button" class="control filter" data-filter=".green">Green</button>
      <button type="button" class="control filter" data-filter=".purple">Purple</button>
      <button type="button" class="control filter active" data-filter=".pink">Pink</button>
      <button type="button" class="control filter" data-filter="none">None</button>
      </fieldset>
      <button id="Reset" class="class">None</button>
    </div>
    </form>
    
    <div id="Containerdemo" class="container">
      <div class="mix test-box green" data-bound=""></div>
      <div class="mix test-box green" data-bound=""></div>
      <div class="mix test-box purple" data-bound=""></div>
      <div class="mix test-box pink" style="display: inline-block;" data-bound=""></div>
      <div class="mix test-box green" data-bound=""></div>
      <div class="mix test-box purple" data-bound=""></div>   
      <div class="mix test-box pink" style="display: inline-block;" data-bound=""></div>
      <div class="mix test-box purple" data-bound=""></div>
      <div class="mix test-box pink" style="display: inline-block;" data-bound=""></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
    </div>
    
    </body>
    {% endcomment %}

{% comment %}
    <!-- {% for i in (1..12) %}
    {% assign urlKey = 'url-' | append:i %}
    {% assign imageKey = 'img-' | append:i %}
    {% assign tooltipKey = 'tooltip-' | append:i %}
    {% assign productURL = product.metafields.product[urlKey] %}
    {% assign imageURL = product.metafields.product[imageKey] %}
    {% assign tooltip = product.metafields.product[tooltipKey] %}
    {% if productURL != blank %}
    <a class="swatch-gallery" href="{{ productURL }}">
      <img src="{{ imageURL }}" width="60" title="" data-toggle="tooltip" data-placement="bottom" data-original-title="{{ tooltip }}">
    </a>
    {% endif %}
    {% endfor %} -->
    <!-- Replace ".all" below with the name of the associated collection -->

    {% endcomment %}

    {% comment %}
    window.addEventListener('scroll', throttle(handleScroll, 50));


function throttle(fn, interval) {
    var timeoutId = -1;
    var last = -1;
  
    return function() {
        var self = this;
        var args = arguments;
        var now = Date.now();
        var difference = last ? now - last : Infinity;
  
        var later = function() {
            last = now;
  
            fn.apply(self, args);
        };
  
        if (!last || difference >= interval) {
            later();
        } else {
            clearTimeout(timeoutId);
  
            timeoutId = setTimeout(later, interval - difference);
        }
    };
  }

function handleScroll() {
    if (mixer.isMixing() || !canLoadMore) return;
  
    var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var offset = scrollTop + window.innerHeight;
    var containerHeight = containerEl.offsetHeight;
  
    if (offset >= containerHeight - scrollThreshold) {
        incrementPageLimit();
    }
  }

  $('.swatch-slider-new').not('.slick-initialized').slick({
    infinite: false,
    arrows:true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<div class='prev-next-button previous'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z' transform=' translate(15,0)'></svg></div>",
    nextArrow:"<div class='prev-next-button next'><svg viewbox='0 0 100 100'><path class='arrow' d='M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z 'transform='translate(85,100) rotate(180) '></svg></div>",
    variableWidth: true
});

{% endcomment %}


/* var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
if(isMobile)
mobileCart.appendChild(desktop-cart); 




window.addEventListener('resize', navBarIconsPositions);

window.onload = navBarIconsPositions();

function navBarIconsPositions() {


  var tabNav = document.getElementById('tabbar');
  var cartTabDisplay = getComputedStyle(tabNav).display;
  switch (true) {
    case cartTabDisplay === 'block':
      mobileCustomerAccount.appendChild(customerAccountMain)
      mobileWishlist.appendChild(wishMain)
      mobileSearch.appendChild(searchMain)
      mobileCart.appendChild(cartMain)
      break;

    default:
      desktopCustomerAccountContainer.appendChild(customerAccountMain);
      desktopWishContainer.appendChild(wishMain);
      desktopSearchContainer.appendChild(searchMain);
      desktopCartContainer.appendChild(cartMain);
  }
}

window.addEventListener('resize', navBarIconsPositions);
toggld();
window.onresize = function () {
  toggld();
}


function toggld() {
  let productSlider = document.getElementById("product-slider");
  if (window.innerWidth < 768) {
    mobileCustomerAccount.appendChild(customerAccountMain)
    mobileWishlist.appendChild(wishMain)
    mobileSearch.appendChild(searchMain)
    mobileCart.appendChild(cartMain)
    productSlider.style.display = "flex";
    productSlider.style.overflowX = "scroll";
    productSlider.style.width = "400px";
  }
  else {
    productSlider.style.display = "flex";
    productSlider.style.overflowX = "unset";
    productSlider.style.width = "unset";
    productSlider.style.flexWrap = "wrap";

    desktopCustomerAccountContainer.appendChild(customerAccountMain);
    desktopWishContainer.appendChild(wishMain);
    desktopSearchContainer.appendChild(searchMain);
    desktopCartContainer.appendChild(cartMain);
  }
}

*/

    
   /*  $('video[id^="portfolio-vid"]').mouseover(function(){
        $(this).get(0).play();
    }).mouseout(function(){
        $(this).get(0).pause();
    })
 */

 /* window.onload = function() {
  var i;
  let x = document.getElementById('pages').innerHTML
  for (i = 2; i <= x; i++) {
    $.get('?page=' + i, function (data) {
      var newElement = $(data).find('#Containerdemo').children();
      mixer.append(newElement);
    });
    lazyMix();
    videoPlay();
  } 
}; */

/*  var userScroll = $(document).scrollTop();
 var i = 2;
 let x = document.getElementById('pages').innerHTML;

 $(window).on('scroll', function() {
    var newScroll = $(document).scrollTop();

    if(userScroll - newScroll > 20 || newScroll - userScroll > 20){

  if (i <= x) {
    $.get('?page=' + i, function (data) {
      var newElement = $(data).find('#Containerdemo').children();
      mixer.append(newElement);
      lazyMix();
      videoPlay();
    });
    console.log(i);
    return i = i + 1;
  } 

     }
 }); */


 /* 
$(".dropdown").on("show.bs.dropdown", function(event){
    $('#overlay').css('display', 'block');
    $('body').css('overflow', 'hidden');
  });

  $(".dropdown").on("hide.bs.dropdown", function(event){
    $('#overlay').css('display', 'none');
    $('body').css('overflow', 'scroll');
  });

  $('#overlay').on("click", function (e) { 
    $('#overlay').css('display', 'none');
    $('body').css('overflow', 'scroll');
    $('.dropdown-menu.mini-cart').removeClass('show'); 
  });


  $('#closeCartDrawer').on("click", function (e) { 
    $('#overlay').css('display', 'none');
    $('body').css('overflow', 'scroll');
    $('.dropdown-menu.mini-cart').removeClass('show'); 
  });



  $(window).resize(function() {
    if ($(window).width() < 768 || isMobile) {
      $("#tabbar").show();
      $('#desktop-navigation').hide();
    }else{
      $("#tabbar").hide();
      $('#desktop-navigation').show();
    }});
    
    if ($(window).width() < 768) {
  $('#desktop-navigation').css("display", "none");
  $('#mobile-navigation').css("display", "block");
  $('#tabbar').css("display", "block");
}
else {
  $('#desktop-navigation').css("display", "block");
  $('#mobile-navigation').css("display", "none");
  $('#tabbar').css("display", "none");
}*/
