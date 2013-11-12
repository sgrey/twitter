/**
 * Created by marina on 11/12/13.
 */
$(function() {
    $("#post").on("click", function()
    {
        var title = $("#title").val();
        var content = $("#content").val();
        $.ajax({
            type: "POST",
            url: "posting",
            data: { title: title, context: content }
        })
            .done(function( msg ) {
                alert( "Text added: " + msg );
            });
    })
});