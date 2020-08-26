var mixitup = require('mixitup');

var mixitupPagination = require('./pagination.js');
mixitup.use(mixitupPagination);
var containerEl = document.querySelector('#Containerdemo');
var loadMoreEl = document.querySelector('.load-more');
var currentLimit = 20;
var incrementAmount = 20;
var canLoadMore = true;
var scrollThreshold = 50;

var i;
let x = document.getElementById('pages').innerHTML
for (i = 2; i <= x; i++) {
  $.get('?page=' + i, function(data) {
    var newElement = $(data).find('#Containerdemo').children();
    mixer.append(newElement)
  });
}

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

  mixer.paginate({limit: currentLimit});
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
$('[mixitup-control]').on('click', function(e){
  e.preventDefault();    
  if(selectedFilters.indexOf($(this).data('toggle')) !== -1){
    var itemArray =  selectedFilters.indexOf($(this).data('toggle'));
    var slicedArray = selectedFilters.slice(($(this).data('toggle')), itemArray);
    document.querySelector("#loop").innerHTML = slicedArray;
    selectedFilters = slicedArray
    return selectedFilters
  } else{
  selectedFilters.push( $(this).data('toggle') );
  document.querySelector("#loop").innerHTML = selectedFilters.sort().join(" ");
}
});

$('[data-reset]').on('click', function(e){
  e.preventDefault();    
  document.querySelector("#loop").innerHTML = ""
  return selectedFilters = []
});
