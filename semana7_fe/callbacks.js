//Ejercicio 1

const number=9
const first_cb=() => console.log("number is even!")
const second_cb=() => console.log("number is odd!")

function check_number(num,fcb,scb){
  if (num % 2===0){
    fcb()
  }
  else{
    scb()
  }
}

check_number(number,first_cb,second_cb)

//Ejercicio 2

const fs = require('fs')
let buffer = fs.readFileSync('web_repo/semana7_fe/file1.txt')
let texto1=buffer.toString().split("\r\n")
buffer = fs.readFileSync('web_repo/semana7_fe/file2.txt')
let texto2 = buffer.toString().split("\r\n")

const compare = (f1,f2,showMessage) => {
    let newText=[]
    for(let item of f1){
        for (let item2 of f2){
            if (item === item2){
                newText.push(item)
            }
        }
    }

    newText.map(showMessage)
}

const showMessage = (item) => {
    console.log(item)
}

compare(texto1,texto2,showMessage)