import { store } from "./../shared/cartData.js";


if (document.querySelector('.shopify-product-form')) {

    let productForm = new Vue({
        el:".shopify-product-form",

        data(){
            return{
                form:{
                    id:null,
                    quantity: 1,
                }

            } 
        },

        methods:{

            addToCart(){
                axios.post('/cart/add.js', this.form )
                    .then( (response) => {

                        // add data to mini cart object
                            // check if product already exist
                            let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                            if(found){
                                found.quantity += parseInt(this.form.quantity);
                                
                                // you can reset the quanity back to 1 if you want
                                // this.form.quantity = 1;
                            }else{
                                // add item at the start of array
                                store.state.cartData[0].items.unshift(response.data);
                            }
                            // open mini cart
                            // $('.mini-cart').dropdown('show');
                            this.onCartOpen();
                            this.closeMiniCart();
                            $('#overlay').addClass('block-display');
                            $('#tlf').css('overflow', 'hidden');

                        new Noty({
                            type: 'success',
                            timeout: 1500,
                            layout: 'topRight',
                            text: 'Product added to cart!'
                        }).show();

                    })
                    .catch( (error) =>  {
                        console.log(error);
                        new Noty({
                            type: 'error',
                            layout: 'topRight',
                            text: 'Some notification text'
                        }).show();
                    });
            },

            onCartOpen() {
                $(".page-wrapper-drawer").addClass("toggled");
                },

            closeMiniCart(){
                // fix for boostrap dropdown javascript opening and closing
                $('.mini-cart').addClass('show');
                $('.mini-cart .dropdown-menu').addClass('show');
                $('.mini-cart .dropdown-item-text').removeClass('show');
            }


        }
    });

    
}


