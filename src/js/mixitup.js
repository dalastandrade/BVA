var mixitup = require('mixitup');
import LazyLoad from 'vanilla-lazyload';
import { store } from "./shared/cartData.js";
import { onCartOpen, closeMiniCart } from './functions.js';

var mixitupPagination = require('./pagination.js');
mixitup.use(mixitupPagination);
var containerEl = document.querySelector('#Containerdemo');
var loadMoreEl = document.querySelector('.load-more');
var currentLimit = 20;
var incrementAmount = 20;
var canLoadMore = true;
var scrollThreshold = 50;

if (window.location.href.indexOf("collection") > -1) {

  function lazyMix() {

    function mouseoverHandler(event) {
      var product = event.currentTarget;
      var lazyImg = product.querySelector(".lazy-hover");
      if (!!lazyImg.getAttribute("data-ll-status")) {
        return;
      }
      LazyLoad.load(lazyImg);
    }

    function nodeSetToArray(nodeSet) {
      return Array.prototype.slice.call(nodeSet);
    }

    function initializeMouseBehaviour() {
      const products = document.querySelectorAll(".reveal");
      nodeSetToArray(products).forEach(function (product) {
        product.addEventListener('mouseover', mouseoverHandler, true);
      });
    }

    initializeMouseBehaviour();
    killQuickBuy();
    enableQuickBuy();
    quickBuyMobile();
  }

  function buyNow() {
    console.log(this.getAttribute('value'));
    var variantID = this.getAttribute('value');

    axios.post('/cart/add.js', {
      quantity: 1,
      id: variantID
    })
      .then(function (response) {

        // add data to mini cart object
        // check if product already exist
        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
        if (found) {
          found.quantity++;

          // you can reset the quanity back to 1 if you want
          // this.form.quantity = 1;
        } else {
          // add item at the start of array
          store.state.cartData[0].items.unshift(response.data);
        }
        // open mini cart
        // $('.mini-cart').dropdown('show');
        onCartOpen();
        closeMiniCart();
        $('#overlay').addClass('block-display');
        $('#tlf').css('overflow', 'hidden');

        new Noty({
          type: 'success',
          timeout: 1500,
          layout: 'topRight',
          text: 'Product added to cart!'
        }).show();

      })


  }

  function killQuickBuy() {
    const buttons = document.querySelectorAll(".quick-buy")
    for (let aa = 0; aa < buttons.length; aa++) {
      buttons[aa].removeEventListener('click', buyNow)
    }
  }

  function enableQuickBuy() {
    const buttons = document.querySelectorAll(".quick-buy")
    for (let aa = 0; aa < buttons.length; aa++) {
      buttons[aa].addEventListener('click', buyNow)
    }
  }

  enableQuickBuy();
  quickBuyMobile();


  /* function videoPlay() {
    //--- select all <video> on the page
    const vids = document.getElementsByTagName('video');
    // Loop over the selected elements and add event listeners
    for (let i = 0; i < vids.length; i++) {
  
      vids[i].addEventListener('mouseout', function (e) {
        vids[i].pause();
      })
      vids[i].addEventListener('mouseover', function (e) {
        var isPlaying = vids[i].currentTime > 0 && !vids[i].paused && !vids[i].ended
          && vids[i].readyState > 2;
  
        if (!isPlaying) {
          vids[i].play();
        }
      })
    }
  } */

  function videoPlay() {
    //--- select all <video> on the page
    var reveal = document.querySelectorAll('.reveal');
    var endPlay = function (e) {
      if (this.children[3].getElementsByTagName('video')[0] != null) {
        if (this.children[3].getElementsByTagName('video')[0].play) {
          this.children[3].getElementsByTagName('video')[0].pause();
        }
      }
    }

    var playVideo = function (e) {
      if (this.children[3].getElementsByTagName('video')[0] != null) {
        if (this.children[3].getElementsByTagName('video')[0].pause) {
          this.children[3].getElementsByTagName('video')[0].play();
        }
      }
    }

    // Loop over the selected elements and add event listeners
    for (let i = 0; i < reveal.length; i++) {
      reveal[i].addEventListener('mouseover', playVideo);
      reveal[i].addEventListener('mouseout', endPlay);
      reveal[i].addEventListener('click', playVideo);
    }
  }

  function quickBuyMobile() {
  $(".mobile-quickbuy").on('click',function(){
    $(this).parent().find("#quickBuy").children().toggleClass("opacity");
  });
}


  if (window.innerWidth < 768) {
    var userScroll = $(document).scrollTop();
    var i = 2;
    let x = document.getElementById('pages').innerHTML;

    $(window).on('scroll', function () {
      var newScroll = $(document).scrollTop();

      if (userScroll - newScroll > 20 || newScroll - userScroll > 20) {

        if (i <= x) {
          $.get('?page=' + i, function (data) {
            var newElement = $(data).find('#Containerdemo').children();
            mixer.append(newElement);
            lazyMix();
            videoPlay();
            quickBuyMobile();
          });
          console.log(i);
          return i = i + 1;
        }
      }
    });
  }
  else {
    window.onload = function () {
      loadAllProducts();
    };
  }

  function loadAllProducts() {
    var i;
    let x = document.getElementById('pages').innerHTML
    for (i = 2; i <= x; i++) {
      $.get('?page=' + i, function (data) {
        var newElement = $(data).find('#Containerdemo').children();
        mixer.append(newElement);
        lazyMix();
        videoPlay();
      });
    }
  }

  function throttle(fn, interval) {
    var timeoutId = -1;
    var last = -1;

    return function () {
      var self = this;
      var args = arguments;
      var now = Date.now();
      var difference = last ? now - last : Infinity;

      var later = function () {
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

  /**
    * Checks if we are within the scroll threshold on each
    * scroll event, and if so, increments the page limit.
    *
    * @return {void}
    */

  function handleScroll() {
    if (mixer.isMixing() || !canLoadMore) return;

    var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    var offset = scrollTop + window.innerHeight;
    var containerHeight = containerEl.offsetHeight;

    if (offset >= containerHeight - scrollThreshold) {
      incrementPageLimit();
    }
  }

  /**
    * Shows a set number of new targets at the bottom of
    * the page by incrementing the page limit.
    *
    * @return {void}
    */

  function incrementPageLimit() {
    currentLimit += incrementAmount;

    mixer.paginate({ limit: currentLimit });
  }

  /**
    * Check whether the current matching collection of target
    * elements has additional hidden elements, and set the
    * `canLoadMore` flag accordingly.
    *
    * @param {mixitup.State} state
    * @return {void}
    */

  function handleMixEnd(state) {
    // At the end of each operation, we must check whether the current
    // matching collection of target elements has additional hidden
    // elements, and set the `canLoadMore` flag accordingly.

    if (state.activePagination.limit + incrementAmount >= state.totalMatching) {
      canLoadMore = false;
    } else {
      canLoadMore = true;
    }

    setTimeout(handleScroll, 10);
  }

  var mixer = mixitup(containerEl, {
    selectors: {
      control: '[mixitup-control]'
    },
    controls: {
      enable: true,
      toggleLogic: 'and'
    },
    pagination: {
      limit: 20,
      loop: true
    }
  });

  window.addEventListener('scroll', throttle(handleScroll, 50));

  var selectedFilters = [];
  $('[mixitup-control]').on('click', function (e) {
    e.preventDefault();
    if (selectedFilters.indexOf($(this).data('toggle')) !== -1) {
      var itemArray = selectedFilters.indexOf($(this).data('toggle'));
      var slicedArray = selectedFilters.slice(($(this).data('toggle')), itemArray);
      document.querySelector("#loop").innerHTML = slicedArray;
      selectedFilters = slicedArray
      return selectedFilters
    } else {
      selectedFilters.push($(this).data('toggle'));
      document.querySelector("#loop").innerHTML = selectedFilters.sort().join(" ");
    }
  });

  $('[data-reset]').on('click', function (e) {
    e.preventDefault();
    document.querySelector("#loop").innerHTML = ""
    return selectedFilters = []
  });
}
