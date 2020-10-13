export function onCartOpen() {
    $(".page-wrapper-drawer").addClass("toggled");
    $('#overlay').addClass('block-display');
}

export function closeMiniCart() {
    // fix for boostrap dropdown javascript opening and closing
    $('.mini-cart').addClass('show');
    $('.mini-cart .dropdown-menu').addClass('show');
    $('.mini-cart .dropdown-item-text').removeClass('show');
    $('#overlay').removeClass('block-display');
}
