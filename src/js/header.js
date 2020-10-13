

// PREVENT INSIDE CLICK DROPDOWN 
$('body').on("click", ".dropdown-menu", function (e) {
    $(this).parent().is(".show") && e.stopPropagation();
});

    
/* 
import CC from "CookieConsent"
window.addEventListener("load", function(){

    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#237afc",
        },
        "button": {
          "background": "transparent", 
          "border": "#fff",
          "text": "#fff",
          "padding": '5px 40px' 
        }
      },
      "type": "info",
      "content": {
        "message": "This website uses cookies to ensure you get the best experience on our website.",
        "href": "https://cookieconsent.insites.com"
      }
    })}); */


    if (localStorage.getItem('cookies_enabled') === null) {
        setTimeout(function () {
            $("#cookieConsent").fadeIn(700);
            $("#cookieConsent").css("display", "flex");
         }, 1000);
        $(".cookieConsentOK").click(function() {
            localStorage.setItem('cookies_enabled', '1');
            $("#cookieConsent").fadeOut(700);
        }); 
    }
    
    if (localStorage.getItem('cookies_enabled') === '1') {
        $("#cookieConsent").css("display", "none");
    }