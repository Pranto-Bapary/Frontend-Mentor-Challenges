const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const errorMessage = document.querySelector('.error-message')
const errorIcon = document.querySelector('.icon')

const validate = () => {
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!input.value.match(valid)) {
        input.style.borderColor = "#f96262"
        errorMessage.innerHTML = "Please Enter a Valid Mail"
        errorIcon.style.display = "block"
        return false

    } else {
        input.style.borderColor = "#ce9797"
        errorMessage.innerHTML = ""
        errorIcon.style.display = "none"
        return true
    }
}