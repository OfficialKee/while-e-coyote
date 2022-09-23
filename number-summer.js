const prompt = require('prompt-sync')({sigint: true})


let someNumbers = Number(prompt(`Enter some numbers, then enter '0' when complete: `))

i=0
total = someNumbers
final = 0
while (i !== someNumbers){
 
 someNumbers = Number(prompt("> "))

 total += someNumbers

}

console.log(total)