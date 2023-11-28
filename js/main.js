let inputEmail = document.getElementById('inputEmail')
let btnSubmit = document.getElementById('btnSubmit')
let textError = document.getElementById('textError')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault
    validateEmail(inputEmail.value)
})

function validateEmail(inputEmailValue){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    
    if(expReg.test(inputEmailValue)){
        inputEmail.style.border = '1px solid #4C7BF3'
        textError.style.visibility = 'hidden'
    }else{
        inputEmail.style.border = '1px solid #FF5466'
        textError.style.visibility = 'visible'
    }
}