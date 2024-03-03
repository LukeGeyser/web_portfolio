let navLinks = document.getElementsByClassName("navLinks");
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top + 450 >= offset && top - 150 < offset + height) {
      [...navLinks].forEach((link) => {
        var spans = link.querySelectorAll("span").forEach((span) => {
          span.classList.remove("active");
        });
      });

      var navLine = document.getElementById(id + "_line");
      navLine.classList.add("active");

      var navText = document.getElementById(id + "_text");
      navText.classList.add("active");
    }
  });
};
