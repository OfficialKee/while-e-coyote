const prompt = require('prompt-sync')({sigint: true})

x = Number(prompt('Enter number 1: '))

y = Number(prompt('Enter number 2: '))

while(x % y !== 0){
  console.log(x)
  x+=1
}
console.log(`${x} is divisible by ${y}`)

