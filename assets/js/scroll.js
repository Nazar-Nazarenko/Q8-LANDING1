document.querySelector('.for-button').addEventListener('click',()=>{
    scrollToElement(document.querySelector('#registration-form .content-people-form'));
});
document.querySelector('.main-text-3').addEventListener('click',()=>{
    scrollToElement(document.querySelector('#registration-form .content-people-form'));
});

/**
 * this function will scroll to the center of passed element
 * @param element
 */
function scrollToElement(element) {
    element.scrollIntoView({block: "center", behavior: "smooth"});
}