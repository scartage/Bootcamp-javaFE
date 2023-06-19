var nombreCompleto = (name, apellido) => {return (name + ' ' + apellido)}

function prove(param){
    console.log(typeof(param))
    if (typeof(param) == "boolean")
        console.log(param)
    else
        console.log("NULL");
}

function reeadEach(...param){
    param.forEach(element => {
        console.log(element);
    });
}
function esMayor(n1, n2){
    if (n1 > n2)
        return n1;
    else if (n2 > n1)
        return n2;
    else
        return ("hola don pepito, hola don jose");
}

var result = function(){
     return (Math.round(Math.random()));
}

function sumar(n1, n2, n3){
    return (n1 + n2 + n3);
}

var nombreCompletoCon = (name, lastN1, lastN2) => {return (name.concat(lastN1, lastN2));}

console.log(nombreCompleto("santiago", "cartagena"));
prove(false);
reeadEach(1, 2, 3, 4 ,5 ,6 , 7, 7, 8, 9);

if (result() == 1)
    console.log("Cara");
else
    console.log("Cruz");

console.log(sumar(3, 2, 1));

console.log(nombreCompletoCon("santiago ", "cartagena ", "henao"));

console.log(esMayor(8, 2));
console.log(esMayor("jeje"));