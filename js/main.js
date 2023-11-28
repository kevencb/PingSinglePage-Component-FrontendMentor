let inputEmail = document.getElementById('inputEmail')
let btnSubmit = document.getElementById('btnSubmit')
let textError = document.getElementById('textError')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    validateEmail(inputEmail.value)
})

function validateEmail(inputEmailValue){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    
    if(expReg.test(inputEmailValue)){
        inputEmail.classList.remove('inputError')
        textError.style.visibility = 'hidden'
        textError.style.marginBottom = '0px'
        console.log('Good')
    }else{
        inputEmail.classList.add('inputError')
        textError.style.visibility = 'visible'
        textError.style.marginBottom = '12px'
        console.log('Bad')
    }
}