if (!localStorage.getItem('user')){
    location.href='login.html'
}

const logOut=() => {
    if (localStorage.getItem('user')){
        localStorage.clear()
        location.href='login.html'
    }
}

const loadData = () => {
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const address = document.getElementById('address')
    const information = JSON.parse(localStorage.getItem('user'))

    username.innerHTML=information.name
    email.innerHTML=information.data.email
    address.innerHTML=information.data.address
    
}

window.addEventListener('load',loadData)

//"ff808181932badb601949b519624725c"