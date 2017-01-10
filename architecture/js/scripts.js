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
  $("button#Dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
  });
  $("button#Light").click(function() {
    $("body").removeClass();
  });
});
