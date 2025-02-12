//Tasks functionality
function checkStatus(element,index){
    if(element[1]==='completed'){
        return `<input type="checkbox" class="checkbox" name="task${index}" id="task${index}"  onclick="completeTask(${index})"checked>
                            <label class="completed-task" for="task${index}" id="taskLabel${index}">${element[0]} (${element[2]})</label>
                            <button class="edit" onclick="editTask(${index})"><img src="img/edit-svgrepo-com.svg" alt=""></button>
                            <button class="delete" onclick="removeTask(${index})"><img src="img/delete-2-svgrepo-com.svg" alt=""></button>`
    }
    else{
        return `<input type="checkbox" class="checkbox" name="task${index}" id="task${index}" onclick="completeTask(${index})">
                            <label for="task${index}" id="taskLabel${index}">${element[0]} (${element[2]})</label>
                            <button class="edit" onclick="editTask(${index})"><img src="img/edit-svgrepo-com.svg" alt=""></button>
                            <button class="delete" onclick="removeTask(${index})"><img src="img/delete-2-svgrepo-com.svg" alt=""></button>`
    }
}

const fillTasks=() => {
    let data=JSON.parse(localStorage.getItem('user'))
    let index=0

    let mainBox = document.getElementById('main-box')
    let box=document.createElement('div')
    const taskList=data.data.tasks
    box.id='tasks-container'
    box.classList.add('tasks-container')
    mainBox.appendChild(box)

    for(item of taskList){
        let taskBox= document.createElement('div')
        taskBox.classList.add('task')
        taskBox.id=`boxTask${index}`
        taskBox.innerHTML=checkStatus(item,index)
        box.appendChild(taskBox)
        index++
    }

}

function addTask(){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskName=document.getElementById('newTask')
    const taskDate=document.getElementById('newDate')


    userData.data.taskamount++
    userData.data.tasks.push([taskName.value,'pending',taskDate.value])
    

    const data={
        data:{
            password:userData.data.password,
            tasks:userData.data.tasks,
            taskamount:userData.data.taskamount
        }
    }

    const request = axios.patch(`https://api.restful-api.dev/objects/${userData.id}`,data)

    request.then(data => {
        localStorage.setItem('user',JSON.stringify(data.data))
        location.reload()
    }).catch(error => alert(`There was an error creating adding your task: ${error}`))
}


function completeTask(taskNumber){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks
    const checkBox=document.getElementById(`task${taskNumber}`)
    let taskLabel=document.getElementById(`taskLabel${taskNumber}`)

    if(checkBox.checked){
        taskList[taskNumber][1]='completed'
        taskLabel.classList.add('completed-task')
    }
    else{
        taskList[taskNumber][1]='pending'
        taskLabel.classList.remove('completed-task')
    }

    const data={
        data:{
            password:userData.data.password,
            tasks:taskList,
            taskamount:userData.data.taskamount
        }
    }

    const request = axios.patch(`https://api.restful-api.dev/objects/${userData.id}`,data)

    request.then(data => {
        localStorage.setItem('user',JSON.stringify(userData))

    }).catch(error => alert(`There was an error completing your task: ${error}`))
}

function removeTask(taskNumber){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks

    if (confirm(`Are you sure you want to delete task ${taskList[taskNumber][0]}?`)) {

        taskList.splice(taskNumber,1)
        

        const data={
            data:{
                password:userData.data.password,
                tasks:taskList,
                taskamount:userData.data.taskamount--
            }
        }

        const request = axios.patch(`https://api.restful-api.dev/objects/${userData.id}`,data)

        request.then(data => {
            localStorage.setItem('user',JSON.stringify(userData))
            location.reload()

        }).catch(error => alert(`There was an error completing your task: ${error}`))
    }
    else{
        location.reload()
    }
}

function filterDate(option){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks
    let index=0

    let box=document.getElementById('tasks-container')
    
    let date
    
    
    box.innerHTML=''
    for(item of taskList){
        

        if (option===1){
            let taskDate=new Date(`${item[2]} 18:00:00`).toLocaleDateString()
            date = new Date().toLocaleDateString()
        
            if(taskDate===date){
                let taskBox= document.createElement('div')
                taskBox.classList.add('task')
                taskBox.id=`boxTask${index}`
                taskBox.innerHTML=checkStatus(item,index)
                box.appendChild(taskBox)
                index++
            }

        }
        else{
            let taskBox= document.createElement('div')
            taskBox.classList.add('task')
            taskBox.id=`boxTask${index}`
            taskBox.innerHTML=checkStatus(item,index)
            box.appendChild(taskBox)
            index++
        }
    }
}

function filterStatus(option){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks
    let index=0

    let box=document.getElementById('tasks-container')
       
    box.innerHTML=''
    for(item of taskList){
        

        if(item[1]===option){
            let taskBox= document.createElement('div')
            taskBox.classList.add('task')
            taskBox.id=`boxTask${index}`
            taskBox.innerHTML=checkStatus(item,index)
            box.appendChild(taskBox)
            index++
        }

    }
}

function editTask(taskNumber){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks
    const taskBox=document.getElementById(`boxTask${taskNumber}`)
    taskBox.className='task-edit'

    taskBox.innerHTML=`<input type="text" id="taskName" value="${taskList[taskNumber][0]}">
                        <input type="date" id="taskDate" value="${taskList[taskNumber][2]}">
                        <button onclick="saveTask(${taskNumber})">Save</button>`

}

function saveTask(taskNumber){
    const userData=JSON.parse(localStorage.getItem('user'))
    const taskList=userData.data.tasks
    const taskName=document.getElementById('taskName')
    const taskDate=document.getElementById('taskDate')

    taskList[taskNumber][0]=taskName.value
    taskList[taskNumber][2]=taskDate.value

    const data={
        data:{
            password:userData.data.password,
            tasks:taskList,
            taskamount:userData.data.taskamount
        }
    }

    const request = axios.patch(`https://api.restful-api.dev/objects/${userData.id}`,data)

    request.then(data => {
        localStorage.setItem('user',JSON.stringify(userData))
        location.reload()

    }).catch(error => alert(`There was an error completing your task: ${error}`))
}