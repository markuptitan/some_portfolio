document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinksMobile = document.querySelector(".nav-links-mobile");

  hamburger.addEventListener("click", () => {
    navLinksMobile.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-text", {
    strings: [
      "An Aspiring Full Stack Dev.",
      "A Passionate Coder.",
      "A Basketball enthusiast.",
      "A Learner.",
    ],
    typeSpeed: 50, // Speed in milliseconds
    backSpeed: 25, // Speed in milliseconds
    backDelay: 1000, // Delay before starting backspacing
    startDelay: 500, // Delay before starting typing
    loop: true, // Loop the animation
    showCursor: false, // Show blinking cursor
  });
});
