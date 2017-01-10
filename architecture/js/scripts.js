$(function() {
  $("button#college").click(function() {
    $(".college-hidden").toggle();
    $(".college-showing").toggle();
  });
  $("button#stonehenge").click(function() {
    $(".stonehenge-showing").fadeToggle();
    $(".stonehenge-hidden").fadeToggle();
  });
  $("button#opera").click(function() {
    $(".opera-showing").slideToggle();
    $(".opera-hidden").slideToggle();
  });
});
