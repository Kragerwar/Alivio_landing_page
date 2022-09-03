$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

$(document).ready(function(){
    $("#top_scroll").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
            $("#top_scroll").addClass("default").fadeIn('fast');
        } else {
            $("#top_scroll").removeClass("default").fadeIn('fast');
        };
    });
});

$(document).ready(function () {
    $(".menu_button").click(function() {
        $(".menu").toggleClass("show_menu")
    })
})