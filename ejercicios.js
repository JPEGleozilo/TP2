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
const max=100
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


//9 -Obtener la suma de los elementos de un array.
let lista = [1, 2, 3, 4, 5, 6]
let sumalista = 0
for (i = 0; i < lista.length; i++) {
    sumalista = (sumalista + lista[i]) 
}
console.log ("La suma de los " + lista.length + " elementos de la lista es igual a " + sumalista)


//10 -Sumar solo los elementos pares de un array.
let listapar = [1, 2, 3, 4, 5, 6]
let sumalistapar = 0
for (i = 0; i < listapar.length; i++) {
    if (listapar[i] % 2 === 0) {
    sumalistapar = (sumalistapar + listapar[i])
    }
}
console.log ("La suma de los pares es igual a " + sumalistapar)


//11 -Ingresar una palabra e identificar la letras distintas y sus repeticiones.
let pala = "pala";
let conteo = {};

for (let i = 0; i < pala.length; i++) {
    let letra = pala[i];
    if(conteo[letra]){
        conteo[letra]++
    }else{
        conteo[letra] = 1
    }
}

for (let letra in conteo) {
    console.log(letra + ":" + conteo[letra]);
}


//12. -Crear un objeto literal con las siguientes propiedades: nombre, sexo biológico y edad. 
// Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, 
// el nombre del hombre con menor edad, el promedio de edad de las mujeres.

var personas = [
//  [0]
    {
        nombre: "charly",
        sexo: "masculino",
        edad: 56
    },
//  [1]
    {
        nombre: "jesica",
        sexo: "femenino",
        edad: 4
    },
//  [2]
    {
        nombre: "carmela",
        sexo: "femenino",
        edad: 127,
    },
//  [3]
    {
        nombre: "bromelio",
        sexo: "masculino",
        edad: 2
    },
//  [4]
    {
        nombre: "felipa",
        sexo: "femenino",
        edad: 82
    },
//  [5]
    {
        nombre: "nicolás",
        sexo: "masculino",
        edad: 1382
    }
];
var minM = {
    nombre: " ",
    sexo: " ",
    edad: -1
}
var maxF = {
    nombre: " ",
    sexo: " ",
    edad: -1
}
var prom = 0
var promF = 0
var femtot = 0
var tot = 0
var edadtot = 0
for (let i = 0; i < personas.length; i++) {
    let actual = personas[i];
    if (personas[i].sexo == "masculino") {
        if (minM.edad < 0) {
            var minM = actual;
        }else if (actual.edad < minM.edad){
            var minM = actual;
        };
    };
    if (personas[i].sexo == "femenino") {
        if (maxF.edad < 0) {
            var maxF = actual;
        }else if (actual.edad > maxF.edad) {
            var maxF = actual;
        };
        var femtot = femtot + 1;
        var promF = promF + actual.edad;
        var promF = promF / femtot;
    };
    var tot = tot + 1;
    var edadtot = edadtot + actual.edad;
    var prom = edadtot / tot;
}
console.log ("El promedio general de edad es " + prom + " entre " + tot + " personas.");
console.log ("La mujer con mayor edad es " + maxF.nombre + ", con " + maxF.edad + " años.");
console.log ("El hombre con menor edad es " + minM.nombre + ", con " + minM.edad + " años.");
console.log("Por último, el promedio de edad entre las mujeres es de " + promF + " entre " + femtot + " mujeres");


//13. -Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
var personas = [
    //  [0]
        {
            nombre: "charly",
            sexo: "masculino",
            edad: 56
        },
    //  [1]
        {
            nombre: "jesica",
            sexo: "femenino",
            edad: 4
        },
    //  [2]
        {
            nombre: "carmela",
            sexo: "femenino",
            edad: 127,
        },
    //  [3]
        {
            nombre: "bromelio",
            sexo: "masculino",
            edad: 2
        },
    //  [4]
        {
            nombre: "felipa",
            sexo: "femenino",
            edad: 82
        },
    //  [5]
        {
            nombre: "nicolás",
            sexo: "masculino",
            edad: 1382
        }
];
    
var actual = {
        nombre: " ",
        sexo: " ",
        edad: 0
} 
    
    function MINM (resultado) {
        var minM = {
            nombre: " ",
            sexo: " ",
            edad: -1
        };
        for (let i = 0; i < personas.length; i++) {
            let actual = personas[i];
            if (personas[i].sexo == "masculino") {
                if (minM.edad < 0) {
                    var minM = actual;
                }else if (actual.edad < minM.edad){
                    var minM = { nombre: actual.nombre, edad: actual.edad };
                };
            };
        };
        return (minM);
    };
    function MAXF (resultado) {
        var maxF = {
            nombre: " ",
            sexo: " ",
            edad: -1
        };
            for (let i = 0; i < personas.length; i++) {
                let actual = personas[i];
                if (personas[i].sexo == "femenino") {
                    if (maxF.edad < 0) {
                        var maxF = actual;
                    }else if (actual.edad > maxF.edad) {
                        var maxF = { nombre: actual.nombre, edad: actual.edad };
                };
            }
        }
        return (maxF)
    }
    function PROM (resultado) {
        var prom = 0
        var tot = 0
        var edadtot = 0
        for (let i = 0; i < personas.length; i++) {
            let actual = personas[i];
            var tot = tot + 1;
            var edadtot = edadtot + actual.edad;
            var prom = edadtot / tot;
        };
        return (prom)
    }
    function PROMF (resultado) {
        var actual = {
            nombre: " ",
            sexo: " ",
            edad: 0
        } 
        var promF = 0
        var sumaF = 0
        var femtot = 0
        for (let i = 0; i < personas.length; i++) {
            if (personas[i].sexo == "femenino") {
                var actual = personas[i];
            }
                var femtot = femtot + 1;
                var sumaF = sumaF + actual.edad;
                var promF = sumaF / femtot;
            };
        return (promF)
    }
    var minM = MINM()
    var maxF = MAXF()
    var prom = PROM()
    var promF= PROMF()

    console.log ("El promedio general de edad es " + prom + " entre " + tot + " personas.");
    console.log ("La mujer con mayor edad es " + maxF.nombre + ", con " + maxF.edad + " años.");
    console.log ("El hombre con menor edad es " + minM.nombre + ", con " + minM.edad + " años.");
    console.log("Por último, el promedio de edad entre las mujeres es de " + promF + " entre " + femtot + " mujeres");


    //14. -Crear una funcion que reciba 3 parametros: minimo, maximo y divisor.
    // Devolver una lista con los divisores del numero ingresado.
    
    //Asumiendo que la consigna solicita: una lista de divisores y, 
    //por separado, el valor máximo y el mínimo
    let l = 3
    let min14 = 1
    let max14 = 0
    var acum14 = 0
    for (i = 1; i <= l; i++) {
        console.log (i)
        if (i % l === 0) {
        if (i > max14) {
            max14 = i
        }
    var acum14 = acum14 + ", " + i
    }
    if (acum14 === 0) {
        acum14 = i
    }
}
console.log ("Máximo divisor: " + max14)
console.log ("Mínimo divisor: " + min14)
console.log ("Divisores: " + acum14)