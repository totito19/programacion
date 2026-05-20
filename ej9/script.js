function ej1() {
    alert("Hola mundo");
}

function ej2() {
    let nombre = prompt("Ingresá tu nombre:");
    alert("Hola " + nombre);
}

function ej3() {
    let n1 = parseFloat(prompt("Primer número:"));
    let n2 = parseFloat(prompt("Segundo número:"));
    alert("La suma es: " + (n1 + n2));
}

function ej4() {
    let edad = parseInt(prompt("¿Cuál es tu edad?"));
    if (edad >= 18) {
        alert("Es mayor");
    } else {
        alert("Es menor");
    }
}

function ej5() {
    let num = parseInt(prompt("Ingresá un número:"));
    if (num % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar");
    }
}

function ej6() {
    let a = parseFloat(prompt("Número 1:"));
    let b = parseFloat(prompt("Número 2:"));
    let c = parseFloat(prompt("Número 3:"));
    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    alert("El mayor es: " + mayor);
}

function ej7() {
    let nota = parseInt(prompt("Ingresá una nota del 1 al 10:"));
    if (nota <= 4) {
        alert("Insuficiente");
    } else if (nota <= 7) {
        alert("Aceptable");
    } else {
        alert("Muy bien");
    }
}

function ej8() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function ej9() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function ej10() {
    let pass = prompt("Ingresá la contraseña:");
    if (pass == "1234") {
        alert("Correcta");
    } else {
        alert("Incorrecta");
    }
}

function ej11() {
    let suma = 0;
    let num = parseFloat(prompt("Ingresá un número (0 para terminar):"));
    while (num != 0) {
        suma = suma + num;
        num = parseFloat(prompt("Ingresá otro número (0 para terminar):"));
    }
    alert("La suma total es: " + suma);
}

function ej12() {
    let n1 = parseFloat(prompt("Primer número:"));
    let n2 = parseFloat(prompt("Segundo número:"));
    let op = prompt("Operación (+, -, *, /):");
    let resultado;
    if (op == "+") {
        resultado = n1 + n2;
    } else if (op == "-") {
        resultado = n1 - n2;
    } else if (op == "*") {
        resultado = n1 * n2;
    } else if (op == "/") {
        resultado = n1 / n2;
    } else {
        resultado = "Operación inválida";
    }
    alert("Resultado: " + resultado);
}

function ej13() {
    let op = prompt("1 - Saludar\n2 - Mostrar fecha\n3 - Número random\nElegí una opción:");
    if (op == "1") {
        alert("Hola!");
    } else if (op == "2") {
        let fecha = new Date();
        alert("Fecha: " + fecha);
    } else if (op == "3") {
        alert("Número random: " + Math.floor(Math.random() * 100));
    } else {
        alert("Opción inválida");
    }
}

function ej14() {
    let secreto = Math.floor(Math.random() * 10) + 1;
    let intento = parseInt(prompt("Adiviná el número (1 al 10):"));
    while (intento != secreto) {
        if (intento < secreto) {
            intento = parseInt(prompt("Más alto. Probá de nuevo:"));
        } else {
            intento = parseInt(prompt("Más bajo. Probá de nuevo:"));
        }
    }
    alert("¡Adivinaste! El número era " + secreto);
}

function ej15() {
    let cantidad = parseInt(prompt("¿Cuántos números vas a ingresar?"));
    let pares = 0;
    for (let i = 0; i < cantidad; i++) {
        let n = parseInt(prompt("Número " + (i + 1) + ":"));
        if (n % 2 == 0) {
            pares++;
        }
    }
    alert("Ingresaste " + pares + " números pares");
}

function ej16() {
    let nombres = ["Ana", "Juan", "Pedro", "Lucía", "Sofía"];
    console.log(nombres);
}

function ej17() {
    let nombres = ["Ana", "Juan", "Pedro", "Lucía", "Sofía"];
    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
}

function ej18() {
    let numeros = [4, 8, 1, 15, 7, 2, 9];
    let mayor = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) mayor = numeros[i];
        if (numeros[i] < menor) menor = numeros[i];
    }
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
}

function ej19() {
    let notas = [7, 8, 5, 9, 6, 10];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    let promedio = suma / notas.length;
    console.log("Promedio: " + promedio);
}

function ej20() {
    let nombres = [];
    let nombre = prompt("Ingresá un nombre (o 'salir' para terminar):");
    while (nombre != "salir") {
        nombres.push(nombre);
        nombre = prompt("Ingresá otro nombre (o 'salir' para terminar):");
    }
    console.log(nombres);
}

function ej21() {
    let array = [10, 20, 30, 40, 50];
    console.log("El array tiene " + array.length + " elementos");
}

function ej22() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(numeros[i]);
        }
    }
}

function ej23() {
    let frutas = ["manzana", "banana", "naranja", "pera"];
    let buscar = prompt("¿Qué fruta querés buscar?");
    if (frutas.includes(buscar)) {
        alert("Sí existe");
    } else {
        alert("No existe");
    }
}

function ej24() {
    let array = [1, 2, 3, 4, 5];
    console.log("Antes: " + array);
    array.pop();
    console.log("Después: " + array);
}

function ej25() {
    let array = [1, 2, 3];
    let nuevo = prompt("¿Qué elemento querés agregar?");
    array.push(nuevo);
    console.log(array);
}

ej1();
ej2();
ej3();
ej4();
ej5();
ej6();
ej7();
ej8();
ej9();
ej10();
ej11();
ej12();
ej13();
ej14();
ej15();
ej16();
ej17();
ej18();
ej19();
ej20();
ej21();
ej22();
ej23();
ej24();
ej25();
