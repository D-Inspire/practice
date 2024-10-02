const input = document.querySelector('input')
const Btn = document.querySelector('button')
const cont = document.querySelector('.dataBox')


let nameTag = document.getElementById('name')
let email =document.getElementById('email')
let password =document.getElementById('pass')
let num =document.getElementById('num')
let info =document.getElementById('info')
let Sub =document.getElementById('save')

Sub.addEventListener('click',Submit)
function Submit(e){
    e.preventDefault()

    const dataObj = {
        name: nameTag.value,
        email: email.value,
        password: password.value,
        phone_number: num.value,
        phone_number: num.value,
        personal_data: info.value
    } 
    
localStorage.setItem('sign_up',JSON.stringify(dataObj))
    console.log(dataObj);
}