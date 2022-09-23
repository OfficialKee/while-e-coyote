const prompt = require('prompt-sync')({sigint: true})

n = Number(prompt(`Enter a value for n: `))


let n1 = 0;
let n2 = 1;
let afterThat = 0;
let i = 0


while (i < n ){
    console.log(n1);
  afterThat = n1 + n2;
  n1 = n2;
  n2 = afterThat

  i++

}
