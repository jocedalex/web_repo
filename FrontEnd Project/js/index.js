
const logButton = document.getElementById("login")

logButton.addEventListener('click',() => {
    localStorage.clear()
    location.href="index.html"
})


//Session check
if (localStorage.getItem('user')){
    fetch("task-box.html")
        .then( res => res.text())
        .then( html => {
            const container=document.getElementById('main-box')
            container.innerHTML=html
            fillTasks()
        })
        .catch(e => {
            console.log('Error importando archivo: ' + e.message);
        });

    const logButton = document.getElementById("login")

    logButton.innerHTML='<a href="#">LOG OUT</a>'

    
}