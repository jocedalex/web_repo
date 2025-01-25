if (localStorage.getItem('user')){
    location.href='profile.html'
}

const registerUser = () => {
    const userData=document.forms.namedItem('userForm')
    const data={
        name:userData[0].value,
        data:{
            email:userData[1].value,
            password:userData[2].value,
            address:userData[3].value
        }
    }

    const request = axios.post('https://api.restful-api.dev/objects',data)

    request.then(data => {
        alert(`The user was successfuly created! Your id is: ${data.data.id}`)
        localStorage.setItem('user',JSON.stringify(data.data))
        location.href='profile.html'
    })
    .catch( error => alert(`There was an error creating this user: ${error}`))
    
}
