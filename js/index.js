const toggleMenu = () => {
  document.querySelector(".nav-links").classList.toggle("slide");
};
const tab = (indexTab) => {
  // remove active from all tabs
  document.querySelectorAll(".tab-title-item").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".tab-content-item").forEach((item) => {
    item.classList.remove("active");
  });

  // set active to selected tab
  document
    .querySelector(`[data-tab-title="${indexTab}"]`)
    .classList.add("active");
  document
    .querySelector(`[data-tab-content="${indexTab}"]`)
    .classList.add("active");
  document.querySelector(`[data-tab-content="${indexTab}"]`).style.animation =
    "fadeIn 1s";
};
