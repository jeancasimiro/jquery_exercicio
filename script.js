$(document).ready(function() {
    $("#adicionar").on("click", function() {
        let  ntarefa =  $('#novaTarefa').val();
        $("ul").append(`<li>${ntarefa}</li>`);
        $("li").click(function() {
            $(this).addClass("riscar");
        });
        $('#novaTarefa').val("");
        $('#novaTarefa').focus();
    })

})




