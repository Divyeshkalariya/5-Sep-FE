$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });
});
// script for gallery 
$(".btn-layout").click(function(){
    $(".btn-view").css({"border-top": "2px solid #fff","border-bottom": "2px solid #fff", "background-color":"#0F1113" });
    $(".btn-layout").css({"border":"none","background-color":"#a99368"});
    $(".view-section").css({"display":"none"});
    $(".layout-secction").css({"display":"block"});
})

$(".btn-view").click(function(){
    $(".btn-layout").css({"border-top": "2px solid #fff","border-bottom": "2px solid #fff", "background-color":"#0F1113"});
    $(".btn-view").css({"border":"none","background-color":"#a99368"});
    $(".view-section").css({"display":"block"});
    $(".layout-secction").css({"display":"none"});s
})