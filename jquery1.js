/**
 * Created by Ewelina on 12.07.2016.
 */

document.addEventListener("DOMContentLoaded", function() {
});

//cwiczenie 1
$(function() {

    var span = $("span");

    span.each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        }
    });

    var paragraphs = $('p');
    paragraphs.each(function(index, element) {

        var button = '<button class="btn" data-tmp="' + (index+1) + '">Click me</button>';
        $(element).append(button)

    });

    $("button").click(function(){
        alert($(this).attr("data-tmp"));
    });

});



