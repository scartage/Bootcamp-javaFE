let arr = ["🍕", "🍕", "🍕", "🍕", "🍕"];

arr = arr.map(item => {
    if (arr.includes("🍕")){
        return ("🍺");
    }
    else{
        return (item);
    }
})

arr.forEach(item => {
    console.log(item);
})

let arr2 = ["🍕", "🍕", "🍕", "🍍", "🍕", "🍕",];

if (arr2.includes("🍍"))
    arr2.splice(3, 1);

arr2.forEach(item => {
    console.log(item);
})

let arr3 = ['🍓', '🍋', '🍓', '🍋', '🍓'];
arr3.fill('🍄',);

arr3.forEach(el => {
    console.log(el);
})

let arr4 = ['🌶','🥛','🌶','🥛','🌶','🥛'];

for (let index = 0; index < arr4.length; index++) {
    if (arr4[index] == '🌶' ){
        arr4.splice(index + 1, 0, "🥵");
    }
}

arr4.forEach(el => {
    console.log(el);
})


let arr5 = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];

for (let index = 0; index < arr5.length; index++) {
    if (arr5[index] == '🎴' && arr5[index + 1] == '🎴'){
        arr5.splice(index + 1, 0, "🃏");
    }
}

arr5.forEach(el => {
    console.log(el);
})

let array = ["🍕", "🍕", "🍕", "🍕", "🍕"];
console.log(array.pop());