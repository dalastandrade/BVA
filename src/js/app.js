// Lazy loading
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import LazyLoad from 'vanilla-lazyload';
var myLazyLoad = new LazyLoad({
        elements_selector: '.lazyload',
});

export default myLazyLoad;

import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;

import 'jquery';
let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;
window.jQuery = $ = jQuery;

import 'popper.js';

import 'bootstrap';

window.Noty = require('noty');


// Vue custom filter
require('./filters/money.js');


// Vue Components

require('./components/ProductForm.js');
require('./components/CartForm.js');
require('./components/MiniCart.js');


// javascript
require('./homepage.js');
require('./product.js');
require('./header.js');
require('./mixitup.js');
