let navLinks = document.querySelector('.navbar .nav-links')
let navToggleBtn = document.querySelector('.nav-toggle')
let toggleIcon = document.querySelector('.fa')
let navActive = true

navToggleBtn.addEventListener('click', () => {
    if (navActive) {
        navLinks.classList.remove('active')
        toggleIcon.classList.add('fa-bars')
        toggleIcon.classList.remove('fa-times')
        navActive = false
    } else {
        navLinks.classList.add('active')
        toggleIcon.classList.remove('fa-bars')
        toggleIcon.classList.add('fa-times')
        navActive = true
    }
})