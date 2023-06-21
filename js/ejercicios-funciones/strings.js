function replace(str){
    while(str.includes('a'))
        str = str.replace('a', 'o');
    return str;
}

let str = "Hola Buenos Dias";

str = replace(str);
console.log(str);

function check(word){
   if (word.startsWith('aca')){
    return true;
   }
   else{
    return false;
   }
}
let word = "escuela";
if (check(word)){
    console.log("si comienza");
}else{
    console.log("nada, pana");
}

function r(hi){
    console.log(hi);
    if (hi.includes("hello")){
        console.log(hi.repeat(3));
    }
}

let hi = "hello";
r(hi);

for (let index = 0; index < 10; index++) {
    console.log("i love to code");
}

let index = 0;
while(index <= 10){
    console.log("I love 👨‍💻");
    index++;
}

function show(array){
    array.forEach(element => {
        console.log(element);
    });
}
let array = ['a', 'b' , 'c' , 'd', 'e'];
show(array);

let n = 5;
while (n > 0)
{
    console.log(n);
    n--;
}