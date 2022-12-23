const isElementInViewport = (element) => {
  let elementPaddingTop = window.getComputedStyle(element, null).getPropertyValue('padding-top');
  elementPaddingTop = +elementPaddingTop.substring(0, elementPaddingTop.indexOf('px'))
  console.log(elementPaddingTop);
  if ((element.offsetTop + 40) < window.scrollY + window.innerHeight - elementPaddingTop - 100) {
    return true
  } else if ((element.offsetTop) >= window.scrollY + window.innerHeight) {
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

  const timeout = setTimeout(() => {
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.add('active');
    }
    toggleActiveOnScroll(animateSections)
    toggleActiveOnScroll(animateSections1)
    clearTimeout(timeout);
  }, 100)

  window.addEventListener('scroll', function () {
    toggleActiveOnScroll(animateSections);
    toggleActiveOnScroll(animateSections1);
    }, {
        passive: true
    });
});