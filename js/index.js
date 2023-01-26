$(".hamburger").click(function () {
  $(this).toggleClass("active");
});

var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $("span[id]").each(function (index, elem) {
    var offsetTop = $(elem).offset().top;

    if (windowTop > offsetTop - 700) {
      var elemId = $(elem).attr("id");
      $("span[id = '" + elemId + "']").addClass("active");
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});

var translateY = function() {
  var windowTop = $window.scrollTop();
  
}
