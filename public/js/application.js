$(document).ready(function(){
  $(".container a").on('click', function() {
    $.post("/color", {}, function( data ) {
      $("li:nth-child(data[:li_number]").css("background-color", data[:color]);
    });
  });
});
