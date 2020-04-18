$(document).ready(function() {
    // Cuando se pulsa en menú se hace presente el submenú
    var active = false;
    $("#button").on("click", function(e) {
        active = !active;
        if (active) {
            //$("#menu").fadeIn(500);
            $("#menu").addClass("active");
            $("#menu").removeClass("inactive");
        } else {
            //$("#menu").fadeOut(500);
            $("#menu").addClass("inactive");
            $("#menu").removeClass("active");
        }
    });
});