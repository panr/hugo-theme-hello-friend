const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
const mobileMenuTrigger = document.querySelector(".menu-trigger");
const desktopMenu = document.querySelector(".menu__inner--desktop");
const allMenuMores = document.querySelectorAll(".menu__sub-inner-more");
const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  mobileMenuTrigger && mobileMenuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
  allMenuMores.forEach(menuMore => menuMore.classList.toggle("hidden", !isMobile()));
};

// Common

menu && menu.addEventListener("click", e => e.stopPropagation());
allMenuMores.forEach(menuMore => menuMore.addEventListener("click", e => e.stopPropagation()));

isMobileMenu();

document.body.addEventListener("click", () => {
  if (!isMobile()) {
    allMenuMores.forEach(menuMore => menuMore.classList.add("hidden"));
  } else if (isMobile() && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

window.addEventListener("resize", isMobileMenu);

// Mobile menu

mobileMenuTrigger &&
  mobileMenuTrigger.addEventListener("click", e => {
    e.stopPropagation();
    menu && menu.classList.toggle("hidden");
  });

// Desktop menu

desktopMenu &&
  desktopMenu.querySelectorAll(".menu__sub-inner").forEach(desktopSubMenu => {
    const desktopMenuTrigger = desktopSubMenu.querySelector(".menu__sub-inner-more-trigger");
    const menuMore = desktopSubMenu.querySelector(".menu__sub-inner-more");
    desktopMenuTrigger.addEventListener("click", e => {
      // Hide other menus if this one was clicked.
      allMenuMores.forEach(otherMenuMore => {
        if (otherMenuMore !== menuMore) {
          otherMenuMore.classList.add("hidden");
        }
      });

      e.stopPropagation();
      menuMore && menuMore.classList.toggle("hidden");

      if (
        menuMore &&
        menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right
      ) {
        menuMore.style.left = "auto";
        menuMore.style.right = 0;
      }
    });
  });
