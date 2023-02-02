$(".hamburger").click(function () {
  $(this).toggleClass("active");
});

const addClassOnScroll = function () {
  const windowTop = $(window).scrollTop();
  $("span[id]").each(function (index, elem) {
    const offsetTop = $(elem).offset().top;

    if (windowTop > offsetTop - 700) {
      const elemId = $(elem).attr("id");
      // console.log(elemId);
      $("span[id = '" + elemId + "']").addClass("active");
    }
  });
};

const translateY = function () {
  const windowTop = $(window).scrollTop();
  // $(".video-container[id]").each(function (index, elem) {
  // const videoTop = $(elem).offset().top;
  // const videoId = $(elem).attr("id");
  // const video = document.querySelector("#" + videoId);
  // const rectTop = video.getBoundingClientRect().top;
  // console.log((rectTop) * 0.1);
  // if (rectTop < ) {

  // }
  // $(".video-container[id = '" + videoId + "']").css({
  //   transform: " translateY(-70px)",
  // });
  // if (windowTop > videoTop - 700) {
  // calcY(video, "video");
  // console.log(videoTop);
  // console.log($(video).attr("id"));
  // videoTranslate(videoId);
  // let videoY = (-342.2 + windowTop * 0.001);
  // let videoY = (-(videoTop) * 0.01 * 3);
  // $(".video-container[id = '" + videoId + "']").css({
  //   transform: " translateY(" + (-(videoTop) * 0.03) + "px)",
  // });
  // if (videoY >= 70) {
  //   $(".video-container[id = '" + videoId + "']").css({
  //     transform: " translateY(70px)",
  //   });
  // }
  // }
  // });
  $(".video-container[id]").each(function (index, elem) {
    const windowHeight = $(window).height();
    const element = document.querySelector(`#${elem.id}`);
    const elemTop = element.getBoundingClientRect().top;
    let elemY = -70;
    // console.log(elemTop);
    // 620
    if (elemTop < 620) {
    }
  });
  $("#key-feature-description").each(function (index, elem) {
    const offsetTop = $(elem).offset().top;
    if (windowTop > offsetTop - 700) {
      $("#key-feature-description").css({
        transform: " translateY(" + (342.2 - windowTop * 0.2) + "px)",
      });
    }
  });
};

// const calcY = function(elem, content) {
//   let rectTop = elem.getBoundingClientRect().top;
//   // console.log(rectTop);
//   if (content == 'video') {

//   }
// }

$(function () {
  let windowTop = $(window).scrollTop();
  let videoY = -70;

  $(window).on("scroll", function () {
    const windowHeight = $(window).height();
    const windowTopNow = $(window).scrollTop();
    // Change the color of some texts
    addClassOnScroll();

    // manipulate all elements!!
    $(".video-container").each(function (index, elem) {
      const element = document.querySelector(`#${elem.id}`);
      const elemTop = element.getBoundingClientRect().top;
      if (elemTop < 620 && windowTopNow > windowTop) {
        videoY += 710 / windowHeight;
        $(`#${elem.id}`).css({
          transform: ` translateY(${videoY}px)`,
        });
      }
      windowTop = windowTopNow;
    });
  });
});
