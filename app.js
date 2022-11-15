document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.onscroll = function () {
  const specs = document.querySelector("#second-container");
  const nav = document.querySelector("nav").querySelectorAll("a");
  if (specs.getBoundingClientRect().top <= 0) {
    nav.forEach((e) => {
      e.style.color = "white";
    });
  } else {
    nav.forEach((e) => {
      e.style.color = "black";
    });
  }
};
