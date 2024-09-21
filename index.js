$(document).on("click", function (event) {
  if (
    $(event.target).hasClass("icon-visible") ||
    $(event.target).hasClass("header-nav")
  ) {
    $(".header-nav").toggleClass("nav-visible");
  } else {
    $(".header-nav").removeClass("nav-visible");
  }
});

$(document).on("click", function (event) {
  if ($(event.target).hasClass("callback")) {
    $(".popup-overlay").show();
  } else if (
    $(event.target).hasClass("popup-wrap") ||
    $(event.target).hasClass("popup-close")
  ) {
    $(".popup-overlay").hide();
  }
});
