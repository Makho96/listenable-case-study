const isElementInViewport = (element) => {
  let elementPaddingTop = window.getComputedStyle(element, null).getPropertyValue('padding-top');
  elementPaddingTop = +elementPaddingTop.substring(0, elementPaddingTop.indexOf('px'))
  if (((element.offsetTop + 40) < window.scrollY + window.innerHeight - elementPaddingTop - 100) && (element.offsetHeight + element.offsetTop > window.scrollY)) {
    return true
  } else {
    return false
  }
}

const toggleActiveOnScroll = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])){
      elements[i].classList.add('active');
    } else {
      elements[i].classList.remove('active');
    }
  }
}



document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.details-info-cont');
  const animateSections = document.querySelectorAll('section.details-section-animation .left');
  const animateSections1 = document.querySelectorAll('section.details-section-animation .right');
  const heroElement = document.querySelectorAll('.hero ');
  const timeout = setTimeout(() => {
    toggleActiveOnScroll(heroElement);
    toggleActiveOnScroll(elements);
    toggleActiveOnScroll(animateSections);
    toggleActiveOnScroll(animateSections1);
    clearTimeout(timeout);
  }, 100)

  window.addEventListener('scroll', function () {
    toggleActiveOnScroll(heroElement);
    toggleActiveOnScroll(elements);
    toggleActiveOnScroll(animateSections);
    toggleActiveOnScroll(animateSections1);
    }, {
        passive: true
    });
});