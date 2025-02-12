const informationRequest =async (number='') => {
    
    const url = `https://reqres.in/api/users/${number}`

    try{
        const response = await fetch(url)

        if (response.status===200){
            const data = await response.json()
            console.log(`${data.data.first_name} ${data.data.last_name} email: ${data.data.email}`)
        }
        else{
            throw("Record is not here")
        }
    }catch(error){
        console.log(`The users doesn't exist: ${error}`)
    }
    
}

informationRequest(2)
informationRequest(23)

const btn=document.getElementById('btn')
const text=document.getElementById('text')

btn.addEventListener('click',() => informationRequest(document.getElementById('text').value))

