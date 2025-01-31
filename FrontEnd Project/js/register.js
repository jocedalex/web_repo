if (localStorage.getItem('user')){
    location.href='index.html'
}

const registerUser = () => {
    const userData=document.forms.namedItem('registerForm')
    
    if (userData[1].value === userData[2].value){
        const data={
            name:userData[0].value,
            data:{
                password:userData[1].value,
                taskamount:0,
                tasks:{}
            }
        }

        const request = axios.post('https://api.restful-api.dev/objects',data)

        request.then(data => {
            alert(`The user was successfuly created! Your id is: ${data.data.id}`)
            localStorage.setItem('user',JSON.stringify(data.data))
            location.href='index.html'
        })
        .catch( error => alert(`There was an error creating this user: ${error}`))
    
    }
    else{
        alert("Passwords do not match")
    }
}

//ff808181932badb60194a4e695607c2a
//456

//Hilauser
//ff808181932badb60194ae65c7ac0b88
//123