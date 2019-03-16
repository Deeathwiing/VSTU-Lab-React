import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
function ScreenSizeAdaptivity() {
  function screenCheck() {
    if ($(window).width() <= 1210) {
      $("#asideSearch")[0].style.width = "150px";
    }

    if ($(window).width() <= 800) {
      $("#asideSearchBtn,#asideSearch").addClass("mx-auto");
    }

    if ($(window).width() <= 450) {
      $("#deleteAside").remove();
      $("#section")[0].style.width = "100%";
      const section = $("#Search")[0];
      section.style.width = "200px";
      section.style.marginRight = "5px";
      $("#Reg")[0].style.width = "100%";
    }
  }

  screenCheck();
  $(window).on("resize", () => {
    screenCheck();
  });
  ScreenSizeAdaptivity();
}

export default ScreenSizeAdaptivity;
