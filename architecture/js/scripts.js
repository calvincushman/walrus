$(function() {
  $(".click1").click(function() {
    $(".college-hidden").toggle();
    $(".college-showing").toggle();
  });
  $(".click2").click(function() {
    $(".stonehenge-showing").fadeToggle();
    $(".stonehenge-hidden").fadeToggle();
  });
  $(".click3").click(function() {
    $(".opera-showing").slideToggle();
    $(".opera-hidden").slideToggle();
  });
});
