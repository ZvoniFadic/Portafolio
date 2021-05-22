$(document).ready(function() {

    // smooth scrool
    $("a").click(function(event) {
        event.preventDefault();

        var gato = this.hash;

        $("html").animate(
            {
            scrollTop: $(gato).offset().top - 86,
        }, 800
        );
    });


    // tooltip en íconos
    $('[data-toggle="tooltip"]').tooltip()
   
    // popover en cards
    $('[data-toggle="popover"]').popover()
    
});