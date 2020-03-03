$( document ).ready(function() {
  $("#sec").hide();
  $("#third").hide();
  $("#about-b").on( "click", function() {
    $("#sec").fadeOut();
    $("#third").fadeOut();
    $("#first").fadeIn();
  });
  $("#resume-b").on( "click", function() {
    $("#first").fadeOut();
    $("#third").fadeOut();
    $("#sec").fadeIn();
  });
  $("#work-b").on( "click", function() {
    $("#first").fadeOut();
    $("#sec").fadeOut();
    $("#third").fadeIn();
  });
});
