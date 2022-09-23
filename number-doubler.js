const prompt = require('prompt-sync')({sigint: true})

let input = Number(prompt('Enter a number: '))

double = 2

while (input<=100){
 
  console.log(input)
  
  input *= double
}
console.log(input)
