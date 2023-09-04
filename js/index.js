
const burgerBtn = document.querySelector('.header-burgerNav__btn');
burgerBtn.addEventListener('click', event => {
    const list = document.querySelector('.header-burgerNav__list')
    if (list.style.display === "block") {
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
})

const firstBtn = document.querySelector('.start-option__btn--left')
const secondBtn = document.querySelector('.start-option__btn--right')
const startWithUs = document.querySelector('.start-withUs')
const startWithoutUs = document.querySelector('.start-withoutUs')
firstBtn.addEventListener('click', event => {
    startWithUs.style.display = "none"
    startWithoutUs.style.display = "block"
    firstBtn.classList.add('start-option__btn--active')
    secondBtn.classList.remove('start-option__btn--active')
})
secondBtn.addEventListener('click', event => {
    startWithoutUs.style.display = "none"
    startWithUs.style.display = "block"
    firstBtn.classList.remove('start-option__btn--active')
    secondBtn.classList.add('start-option__btn--active')
})