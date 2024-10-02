let email = document.querySelector('#email')
let pwd = document.querySelector('#password')
let pwdToggle = document.querySelector('#passwordTogle')
let submit = document.querySelector('button')
let errorMsg = document.querySelector('.errorMessage')


submit.addEventListener('click',()=>{
    let storedData = JSON.parse(localStorage.getItem('sign_up'))


    
    // let newStore = {
    //     ...storedData,
    //     name: 'Blessing James'
    // }
    console.log("first store",storedData);
    storedData = {
        ...storedData,
        sugar: 'yellow',
        password: pwd.value
    }

    localStorage.setItem('sign_up',JSON.stringify(storedData))

    // if(email.value === storedData.email && pwd.value === storedData.password){

    //     // window.open('../gold.png')
    //     window.location.href = '../index2.html'
    // }
    // else{
    //     errorMsg.style.display = 'block'
        
    // }

})
