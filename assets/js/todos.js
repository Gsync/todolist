//Check off specific todos by clicking
$(document).ready(function() {


  $("li").click(function() {
    $(this).toggleClass("completed");
  });



});
