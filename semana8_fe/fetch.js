//1st Exercise
 const listObjects = async () => {
    let request = await fetch('https://api.restful-api.dev/objects')
    let data = await request.json()
    
    for(item of data){
        if (item.data != null){
            keys=Object.keys(item.data)
            values=Object.values(item.data)
            console.log(`${item.name} (${keys[0]}:${values[0]}, ${keys[1]}:${values[1]})`)
        }
    }
}

listObjects()


//2nd Exercise
function createUser(name,email,password,address){
    const data={
        name:name,
        email:email,
        data:{
            password:password,
            address:address
        }
    }
    
    const requestOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    };

    const addObject = fetch('https://api.restful-api.dev/objects',requestOptions)
    let userID

    addObject
        .then( response => response.json())
        .then( data => {
            console.log(data)
            userID=data.id
            console.log(`New user created with id=${userID}`)
        })

    return 'Ok'
}


const newUserID = createUser('Joced N','jn@mail.com','123','123 FL st')

//3rd Exercise
async function getUser(id){
    try{
        const request = await fetch(`https://api.restful-api.dev/objects/${id}`)
        if (request.status==200){
            const response = await request.json()
            console.log(response)
        }
        else{
            throw ('Record not found')
        }
    }
    catch (error){
        console.log(`There was an error ${error}`)
    }
}

getUser('ff808181932badb601948f78a596615e')


//4rd Exercise
function updateUser(userID,address){
    const data={
        data:{address:address}
    }
    
    
    const requestOptions = {
        method: "PATCH", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
        "Content-Type": "application/json",
        
        },
        redirect: "follow", 
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data), 
    };

    const addObject = fetch(`https://api.restful-api.dev/objects/${userID}`,requestOptions)

    addObject
        .then( response => response.json())
        .then( data => {
            console.log(data)
            console.log(`User updated for id=${userID}`)
        })
}


updateUser('ff808181932badb601948f78a596615e','2425 New st New Estate')

getUser('ff808181932badb601948f78a596615e')