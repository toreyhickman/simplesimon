$(document).ready(function(){
  $(".container a").on('click', function() {
    $.post("/color", {}, function( data ) {
      debugger
      $("li:nth-child("+data.li_number+")").css("background-color", data.color);
    });
  });
});
