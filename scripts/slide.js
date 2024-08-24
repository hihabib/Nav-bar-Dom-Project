/**
 * Init Slide amnimation
 * @param {HTMLElement} slide
 * @param {string} cssSelector
 */
export function slideAnimationInit(slide, cssSelector) {
  const head = document.querySelector("head");
  const style = document.createElement("style");
  style.setAttribute('data-style', "slide");
  const slideHeight = slide.clientHeight;

  style.innerHTML = `
        ${cssSelector}{
            height: ${slideHeight}px
        }
    `;
  head.appendChild(style);
}

/**
 * Reset animation slide
 * @param {HTMLElement} slide 
 */
export function resetSlide(slide){
    // remove internal css
    const slidesCss = document.querySelectorAll('[data-style="slide"]');
    slidesCss.forEach(function(slideCss){
        slideCss.remove();
    })
        

    // remove style attribute
    slide.style.height = '';

    // remove slideClose class
    slide.classList.remove('slideClose');
}


/**
 *
 * @param {HTMLElement} slide
 */
export function slideClose(slide) {
  const height = slide.clientHeight;
  slide.style.height = height + "px";
  slide.classList.add("slideClose");
}

/**
 *
 * @param {HTMLElement} slide
 */
export function slideOpen(slide) {
  slide.classList.remove("slideClose");
}

/**
 * Is slide Open
 * @param {HTMLElement} slide 
 * @returns {boolean} if slide close, then returns false. Otherwise true 
 */
export function isSlideOpen(slide){
    return !slide.classList.contains("slideClose");
}