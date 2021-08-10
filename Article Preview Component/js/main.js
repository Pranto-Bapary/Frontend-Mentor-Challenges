const button = document.querySelector('.client-wrapper .share button')
const content = document.querySelector('.share-social-media')
const wrapper = document.querySelector('.client-wrapper')
button.addEventListener('click', () => {
    content.classList.toggle('show')
    button.classList.toggle('active')
    wrapper.classList.toggle('active')
})