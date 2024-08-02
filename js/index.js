document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMobile = document.getElementById("nav-mobile");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMobile.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let options = {
    strings: [
      "Web Development.",
      "DevOps.",
      "Databases.",
      "Basketball.",
      "Learning.",
    ],
    typeSpeed: 50, // Speed in milliseconds
    backSpeed: 25, // Speed of backspacing
    backDelay: 1000, // Delay before starting to backspace
    startDelay: 500, // Delay before typing starts
    loop: true, // Loop indefinitely
  };
  new Typed("#typed-text", options); // Correct selector
});

document.addEventListener("DOMContentLoaded", () => {
  const currentDateElement = document.getElementById("current-date");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  currentDateElement.textContent = currentDate;
});
