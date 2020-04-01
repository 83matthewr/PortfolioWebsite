$( document ).ready(function() {
  $("#about").hide();
  $("#resume").hide();
  $("#about-btn").on( "click", function() {
    $("#resume").fadeOut();
    $("#projects").fadeOut();
    $("#about").fadeIn();
  });
  $("#resume-btn").on( "click", function() {
    $("#about").fadeOut();
    $("#projects").fadeOut();
    $("#resume").fadeIn();
  });
  $("#work-btn").on( "click", function() {
    $("#about").fadeOut();
    $("#resume").fadeOut();
    $("#projects").fadeIn();
  });
});
