$(document).ready(function(){
    $(".sub_menu_mobile").hide()

    $(".menu-mobile").click(function(){
        $(".sub_menu_mobile").slideToggle(400);
    });
});
