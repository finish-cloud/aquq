$(document).ready(function () {
  $(".header-hamburger").click(function() {
    if ($(".header-navi").hasClass("deactivate")) {
        $(".header-navi").removeClass("deactivate");
    } else {
        $(".header-navi").addClass("deactivate");
  }
  });
  $(".footer-hamburger").click(function() {
    if ($(".footer-navi").hasClass("deactivate")) {
        $(".footer-navi").removeClass("deactivate");
    } else {
        $(".footer-navi").addClass("deactivate");
  }
  });
});
