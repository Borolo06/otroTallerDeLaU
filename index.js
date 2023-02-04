let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');
let b10 = document.querySelector('.b10');
let cierre = document.querySelector('.boton');


//Problema 1
b1.addEventListener("click", () => {
    let n1 = parseInt(prompt("regalame el primer numero"));
    let n2 = parseInt(prompt("regalame el segundo numero"));
    if (n1 > n2) {
        document.write("mayor numero " + n1);
    } else {
        document.write("mayor " + n2);
    }
});
//Problema 2
b2.addEventListener("click", () => {
    let n = parseFloat(prompt("dame un numero"));
    if (n == 0) {
        document.write("tu numero " + n + " es 0");
    }
    if (n >= 1) {
        document.write("tu numero " + n + " es positivo");
    }
    if (n < 0) {
        document.write("tu numero " + n + " es negativo");
    }
});
//Problema 3
b3.addEventListener("click", () => {
    let edad = parseInt(prompt("ey flaco, regalame tu edad"));
    if (edad >= 18) {
        document.write("podes votar porque sos mayor");
    } else {
        document.write("acostate a dormir que sos un bebe");
    }
});
//Problema 4
b4.addEventListener("click", () => {
    alert("te mostrare los numeros del 10 al 100 de 2 en 2 porque no sabes contar");
    for (let i = 10; i <= 100; i = i + 2) {
        document.write(i + "<br>")
    }
});
//Problema 5
b5.addEventListener("click", () => {
    let nota1 = parseFloat(prompt("ponme la nota"));
    let nota2 = parseFloat(prompt("ponme la nota"));
    let nota3 = parseFloat(prompt("ponme la nota"));
    let nota4 = parseFloat(prompt("ponme la nota"));
    let nota5 = parseFloat(prompt("ponme la nota"));
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    document.write("tu promedio es " + promedio + "<br>")
    if (promedio < 3) {
        document.write("ni para el estudio sirves flaco");
    } else {
        document.write("ganaste la materia crack");
    }
});
//Problema 6
b6.addEventListener("click", () => {
    let letra = prompt("Ingrese una letra");
    if (letra.length > 1) {
        document.write("flaco, no te puedo leer mas de una letra");
    } else if (letra == "a" || letra == "e" || letra == "i" || letra == "o" ||
        letra == "u") {
        document.write("es vocal")
    } else {
        document.write("no es vocal");
    }
});
//Problema 7
b7.addEventListener("click", () => {
    function escogerTecnologia(article) {
        switch (article) {
            case "computadora":
                return document.write("Con mi PC aprendo JS.");
            case "celular":
                return document.write("En mi celular veo YouTube.");
            case "cable":
                return document.write("Hay un cable en mi bota.");
            default:
                return document.write("Eso no existe flaco");
        }
    }
    let userInput = prompt("flaco, poneme la que quieras\ncomputadora\ncelular\ncable");


    console.log(escogerTecnologia(userInput));
});
//Problema 8
b8.addEventListener("click", () => {
    function añoBisiesto(año) {
        return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
    }
    let leerAño = parseInt(prompt("regalame un año flaco"));
    if (añoBisiesto(leerAño)) {
        document.write(leerAño + " es bisiesto.");
    } else {
        document.write(leerAño + " no es bisiesto flaco");
    }
});
//Problema 9
b9.addEventListener("click", () => {
    let suma = 0;
    for (let i = 100; i <= 500; i++) {
        suma += i;
    }
    document.write("Mira amigo mio, al sumar los numeros del 100 al 500, estos dan " + suma);
});
//Problema 10
b10.addEventListener("click", () => {
    let totalMonto = 0;
    let monto = parseFloat(prompt("Ingresa el monto, flaco"));

    while (monto !== 0) {
        if (monto < 0) {
            document.write("Flaco, pone numeros positivos que me dañas el sistema" + "<br>");
            monto = parseFloat(prompt("Dame otro monto, cuando acabes pones 0"));
        } else {
            totalMonto += monto;
            monto = parseFloat(prompt("dame otro monto, cuando acabes pones 0"));
        }
    }

    if (totalMonto > 1000) {
        totalMonto *= 0.9;
    }
    document.write("Ahora me pagas " + totalMonto);
});