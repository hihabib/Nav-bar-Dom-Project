import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/slide.css";
import {
  slideAnimationInit,
  slideClose,
  slideOpen,
  isSlideOpen,
  resetSlide,
} from "./slide";

/**
 * Reset and manage slide animation on window resize
 * @param {HTMLElement} slide
 */
function manageWindowResize(slide) {
  if (window.innerWidth > 960) {
    resetSlide(slide);
  } else {
    slideAnimationInit(slide, ".menu");
    slide.classList.add("slideClose");
  }
}

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  if (isSlideOpen(slideContainer)) {
    slideClose(slideContainer);
  } else {
    slideOpen(slideContainer);
  }
}

/**
 * Manage menu icon rotation
 * @param {HTMLElement} menuIcon
 */
function rotateMenuIcon(menuIcon) {
  if (!isSlideOpen(slideContainer)) {
    menuIcon.style.transform = "rotate(90deg)";
  } else {
    menuIcon.style.transform = "rotate(0deg)";
  }
}

/**
 * Slide Container to apply slide animation
 * @type {Element | null}
 */
const slideContainer = document.querySelector(".menu");

/**
 * Menu Icon SVG element
 * @type {HTMLOrSVGElement | null}
 */
const menuIcon = document.querySelector(".menu-icon");

// toggle mobile menu on click
menuIcon.addEventListener("click", function () {
  rotateMenuIcon(menuIcon);
  toggleMobileMenu();
});

// manage window resize
window.addEventListener("resize", function () {
  manageWindowResize(slideContainer);
});

manageWindowResize(slideContainer);
