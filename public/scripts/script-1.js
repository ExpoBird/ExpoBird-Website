"use strict";
gsap.registerPlugin(ScrollTrigger);

//////////////////// FAQ ///////////////////////

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

})();


/////////////////// side image //////////////////////

items.forEach(item => item.addEventListener('click', toggleAccordion));

gsap.registerPlugin(ScrollTrigger);

let timeln2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".technology-gradient",
    start: "top+=250px bottom",
    end: "top top",
    scrub: 1,
    immediateRender: false
  },
});

timeln2.to(".sideChangeImage", {
  xPercent: -116,
  yPercent: 181,
  scrub: 1
});



///////////////////////////// mobile nav ///////////////////////////

var headers = ["H1", "H2", "H4", "H5", "H6"];

$(".accordion-nav").click(function (e) {
  var target = e.target,
    name = target.nodeName.toUpperCase();

  if ($.inArray(name, headers) > -1) {
    var subItem = $(target).next();

    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion-nav p, .accordion-nav div").filter(function () {
      if ($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");

    subItem.slideToggle("fast", function () {
      $(".accordion-nav :visible:last").css("border-radius", "0 0 10px 10px");
    });
    $(target).css({ "border-bottom-right-radius": "0", "border-bottom-left-radius": "0" });
  }
});



///////////////////// work process card /////////////////////


let timeln1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flyCardStacks",
    pin: true,
    pinSpacing: true,
    start: "left-=120px left",
    end: "+=2000",
    scrub : 1,
  },
});

timeln1.addLabel("flycard1");
timeln1.from(".flyCard-1", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard2");

timeln1.to(".flyCard-1", {
  yPercent: -150,
  rotation: 180,
});

timeln1.from(".flyCard-2", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard3");

timeln1.to(".flyCard-2", {
  yPercent: -150,
  rotation: 180,
});

timeln1.from(".flyCard-3", {
  yPercent: 0,
  opacity: 1,
});

timeln1.addLabel("flycard4");

timeln1.to(".flyCard-3", {
  yPercent: -150,
  rotation: 180,
});