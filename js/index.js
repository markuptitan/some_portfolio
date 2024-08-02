document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMobile = document.getElementById("nav-mobile");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMobile.classList.toggle("active");
  });

  // Typed.js Initialization
  const typedOptions = {
    strings: [
      "Web Development.",
      "DevOps.",
      "Databases.",
      "Basketball.",
      "Learning.",
    ],
    showCursor: false, // Hide cursor
    typeSpeed: 50, // Speed in milliseconds
    backSpeed: 25, // Speed of backspacing
    backDelay: 1000, // Delay before starting to backspace
    startDelay: 500, // Delay before typing starts
    loop: false, // Loop indefinitely
  };
  new Typed("#typed-text", typedOptions);

  // Display Current Date
  const currentDateElement = document.getElementById("current-date");
  const dateOptions = { year: "numeric", month: "long" };
  const currentDate = new Date().toLocaleDateString(undefined, dateOptions);
  currentDateElement.textContent = currentDate;

  // Smooth Scrolling
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
