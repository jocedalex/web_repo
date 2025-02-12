
//1st Exercise
const listObjects = async () => {
    let request = await axios.get('https://api.restful-api.dev/objects')
    
    for(item of request.data){
        if (item.data != null){
            keys=Object.keys(item.data)
            values=Object.values(item.data)
            console.log(`${item.name} (${keys[0]}:${values[0]}, ${keys[1]}:${values[1]})`)
        }
    }
}

listObjects()

//2nd Exercise
// async function createUser(name,email,password,address){
//     const data={
//         name:name,
//         data:{
//             email:email,
//             password:password,
//             address:address
//         }
//     }
    
//     const request = await axios.post('https://api.restful-api.dev/objects',data)
//     console.log(`User created with id:${request.data.id}`)
// }


// const newUserID = createUser('Joced N','jn@mail.com','123','123 FL st')


//3rd Exercise
async function getUser(id){
    try{
        const request = await axios.get(`https://api.restful-api.dev/objects/${id}`)
        if (request.status==200){
            console.log(request.data)
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
async function updateUser(userID,address){
    const data={
        data:{address:address}
    }
    
    const addObject = await axios.patch(`https://api.restful-api.dev/objects/${userID}`,data)

    console.log(`User updated for id=${userID}`)
}


updateUser('ff808181932badb601948f78a596615e','1245 New st New Estate')

getUser('ff808181932badb601948f78a596615e')