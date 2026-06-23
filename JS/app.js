
const menuLinks = document.querySelectorAll(".menu a");
const path = location.pathname.toLowerCase();
menuLinks.forEach(link => {
  const href = link.getAttribute("href").toLowerCase();
  if (path.endsWith(href.replace("./","").replace("../",""))) {
    link.classList.add("active");
  }
});
