/**
 * Created by marina on 11/12/13.
 */
$(function() {
    $("#send").on("click", function()
    {
        var textarea = $("#textarea").val();
        var entrytext = $("#entrytext").val();
        $.ajax({
            type: "POST",
            url: "adding",
            data: { textarea: textarea, entrytext: entrytext }
        })
            .done(function( msg ) {
                alert( "Text added: " + msg );
            });
    })
});