const loadData = () => {
    const username = document.getElementById('nameInput')
    const loginBox=document.getElementById('login')
    const registerBox=document.getElementById('register')

    if (localStorage.getItem('user')){
        const information = JSON.parse(localStorage.getItem('user'))

        username.value=information.id
        username.disabled=true
        
        loginBox.innerHTML=''
        registerBox.innerHTML='Profile'
        registerBox.href='profile.html'
    }
    
}

async function validUser(oldPass,user){
    if (localStorage.getItem('user')){
        const data=JSON.parse(localStorage.getItem('user'))
        
        if(oldPass===data.data.password){
            return true
        }
        else{
            return false
        }
    }
    else{
        const request = await axios.get(`https://api.restful-api.dev/objects/${user}`)

        if(oldPass === request.data.data.password){
            localStorage.setItem('temp',JSON.stringify(request.data))
            return true
            
        }
        else{
            return false
        }
    }
}

async function updateUser(){
    const updateForm = document.forms.namedItem('updateForm')

    if(updateForm[2].value === updateForm[3].value){
        try{
            if(await validUser(updateForm[1].value,updateForm[0].value)){
                //Get local storage based on existing session
                let information
                if(localStorage.getItem('user')){
                    information=JSON.parse(localStorage.getItem('user'))
                }
                else{
                    information=JSON.parse(localStorage.getItem('temp'))
                    localStorage.removeItem('temp')
                }

                const data={data:{
                    password:updateForm[2].value,
                    address:information.data.address,
                    email:information.data.email
                }}

                const request = await axios.patch(`https://api.restful-api.dev/objects/${updateForm[0].value}`,data)

                if (request.status===200){
                    alert(`User password updated for ${updateForm[0].value}`)
                    location.href='profile.html'
                }
                else{
                    throw(`Unable to update record ${request.status}`)
                }
            }
            else{
                throw('Old password is incorrect')
            }
        }
        catch (error){
            alert(`There was an error ${error}`)
        }
    }
    else{
        alert('New password fields are different')
    }
} 

window.addEventListener('load',loadData)