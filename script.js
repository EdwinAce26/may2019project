/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
$(document).ready(function() {
    // All your Javascript
    // code to cycle through carousel
    $("#myCarousel").carousel({
        interval: 3500
    });
    //code to add and delete active class
    $("ul li").click(function(){
    
    var clicked_tab = $(this);
    clicked_tab.addClass("active");
    clicked_tab.parent().children("li").not(clicked_tab).removeClass("active");
    });
    //
    
});