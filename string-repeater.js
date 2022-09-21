const prompt = require('prompt-sync')({sigint: true})

strang = prompt("Enter a string: ")
let str = strang
while (str.length < 10){
  str+=strang
  console.log(str)
  
}