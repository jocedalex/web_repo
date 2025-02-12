if (localStorage.getItem('user')){
    location.href='index.html'
}

const loginUser = () => {
    const userData=document.forms.namedItem('loginForm')

    const request = axios.get(`https://api.restful-api.dev/objects/${userData[0].value}`)

    request
        .then( data => {
            if(data.data.data.password == userData[1].value){
                localStorage.setItem('user',JSON.stringify(data.data))
                location.href='index.html'
            }
            else{
                alert("Incorrect Password")
            }
        })
        .catch(error => alert(`User doesn't exist: ${error}`))

}