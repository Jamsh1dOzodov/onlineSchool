
const burgerBtn = document.querySelector('.header-burgerBtn');
burgerBtn.addEventListener('click', event => {
    const list = document.querySelector('.nav-list')
    list.classList.toggle('nav-list--show')
    if (list.classList.contains('nav-list--show')) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "visible"
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