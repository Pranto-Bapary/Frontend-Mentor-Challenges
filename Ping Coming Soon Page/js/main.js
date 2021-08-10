const input = document.querySelector('.input-form')
const button = document.querySelector('.btn')
const errorMessage = document.querySelector('.error-message')

const validate = () => {
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!input.value.match(valid)) {
        input.focus()
        input.style.borderColor = "red"
        errorMessage.innerHTML = "Please provide a valid mail address"
        return false

    } else {
        input.style.borderColor = "#ce9797"
        errorMessage.innerHTML = ""
        return true
    }
}