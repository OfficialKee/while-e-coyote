const prompt = require('prompt-sync')({sigint: true})


let someNumbers = Number(prompt(`Enter some numbers, then enter '0' when complete: `))


total = 0
final = 0
while (someNumbers > 0){
 
 someNumbers = Number(prompt("> "))

 total += someNumbers
final +=total
}

console.log(final)