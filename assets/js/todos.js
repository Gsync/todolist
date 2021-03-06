$(document).ready(function() {


//Check off specific todos by clicking
  $("ul").on('click', 'li', function() {
    $(this).toggleClass("completed");
  });

//Click on X to delete todo
  $("ul").on('click', 'span', function(event) {
      $(this).parent().fadeOut(500, function() {
        $(this).remove();
      });
      event.stopPropagation();
  });

//enter the todo
  $("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
      var todoText = $(this).val();
      $(this).val("");
      $("ul").prepend("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
    }
  });

//hide/fade plus icon
  $(".fa-plus").on('click', function(){
    $("input[type='text']").fadeToggle();
  });

});
