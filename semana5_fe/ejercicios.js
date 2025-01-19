//Ejercicio 1
const itemList1 = [2,4,6,7,8]

for (const item of itemList1){
  console.log(item)
}

//Ejercicio 2

const itemList2 = [2,4,6,7,8]
const filterList = []
let filterList2 = []

for (const item of itemList2){
  if (item % 2 ===0) filterList.push(item)
}

filterList2=itemList2.filter((item)=>{if (item % 2===0) return item})


console.log(filterList2)
console.log(filterList)

//Ejercicio 3
const celsiusList = [30,28,17,5]
let farenheitList = []

farenheitList=celsiusList.map((item)=>(item*9/5)+32)


console.log(farenheitList)

//Ejercicio 4
const text='hello world new'
let word=''
let newList=[]
for(const ch of text){
  if (ch === ' '){
    newList.push(word)
    word=''
  }
  else{
    word+=ch
  }

}
newList.push(word)

console.log(newList)

//Ejercicio 5
const student = {
	name: "John Doe",
	grades: [
		{name: "math",grade: 80},
		{name: "science",grade: 100},
		{name: "history",grade: 60},
		{name: "PE",grade: 90},
		{name: "music",grade: 98}
	]
}

let result={name:student['name']}
let gradeAvg=0
let highest=0
let high
let lowest=9999999999999
let low
let len=0

for(const item of student['grades']){
  if (item['grade']>highest){
    highest=item['grade']
    high=item['name']
  }
  else if(item['grade']<lowest){
    lowest=item['grade']
    low=item['name']
  }
  gradeAvg+=item['grade']
  len+=1
}

gradeAvg/=len

result['gradeAvg']=gradeAvg
result['highestGrade']=high
result['lowestGrade']=low

console.log(result)