//1. -Ingresar dos valores y sumarlos.
let a=10;
let b=4;
let resultado = a + b;
console.log(resultado);


//2. -Ingresar tres valores e indicar cual es el mayor y cual el menor.
let c=10;
let d=4;
let e=5;
if (c > d && c > e) {
    console.log("El mayor es: " + c);
}
else if (d > c && d > e) {
    console.log("El mayor es: " + d);
} else {
    console.log("El mayor es: " + e);
};


//3. -Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
let palabra = "hola";
let largo = palabra.length;
console.log(palabra + " tiene " + largo + " letras.");


//4. -Ingresar un número e indicar si es par.
let f = 4
if (f % 2 === 0) {
    console.log("Par");
}
else {
    console.log ("Impar");
}


//5. -Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
let palabra2 = "mundo"
let n = 3;
for (let a = 0; a < n; a ++) {
    console.log(palabra);
}


//6. -Ingresar dos valores enteros y enumerar los elementos que los separan.
let g = 10;
let h = 11;
if (g < h) {
    let dif = h - g;
    let i = g+1
    var acum = i;
        for (let i=g+1; i < h; i++) {
        console.log(g);
            if (i == g+1) {
            }else if (i != h) {
            var acum= acum + ", " + i;
            }
        }
    if (dif === 1) {
        acum="no hay números entre medio"
    }
    console.log("La diferencia total entre "+ g + " y " + h + " es: " + dif + " (" + acum + ")");
}else if (g == h) {
    console.log("Los números son iguales.");
}else if (g > h){
    let dif= g - h;
    let i = h+1
    var acum = i;
        for (let i = h+1; i < g; i++) {
        console.log(i);
            if (i == h+1) {
            }else if (acum != i){
            var acum=acum + ", " + i;
            }
        } 
    if (dif === 1) {
        acum="no hay números entre medio"
    }
    console.log("La diferencia total entre " + h + " y " + g + " es: " + dif + " (" + acum + ")");
}


//7. -Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
let j = 9;
let k = 3;
var cont = 0
if (j < k) {
    let i = j
    for (let i = j; i<=k; i++){
        if (i % 3 === 0) {
            console.log (i + " es múltiplo de 3")
            var cont=1
        }
    }
    if (cont!=1) {
    console.log("no hay múltiplos de 3 entre " + j + " y " + k)
    }
} else if (j == k) {
    if (j % 3 == 0){
        console.log ("Los números son iguales, el único múltiplo de 3 es " + j)
    } else {
        console.log ("Los números son iguales y no hay múltiplos de 3")
    }
} else if (k < j) {
    let i = k
    for (;i<=j; i++){
        if (i % 3 === 0) {
            console.log (i + " es múltiplo de 3")
            var cont=1
        }
    }
    if (cont!=1) {
    console.log("no hay múltiplos de 3 entre " + k + " y " + j)
    };
}


//8 -Mostrar los multiplos de 2 y 5 menores a 100.
let max=100
let acum2= ""
let acum5= ""
for (let i=1; i<100; i++) {
    if (i % 2 == 0) {
        if (i==2){
        acum2 = acum2 + i
        }else{
            acum2 = acum2 + ", " + i
        }
    } 
}
console.log ("Los múltiplos de 2 menores a 100 son: " + acum2)

for (let i=1; i<100; i++) {
    if(i % 5 == 0) {
        if(i==5) {
            acum5 = acum5 + i 
        }else{
            acum5 = acum5 + ", " + i
        }
    }
}
console.log ("Los múltiplos de 5 menores a 100 son: " + acum5)