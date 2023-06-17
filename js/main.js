alert ("Bienvenido a CompuTuc");

//Indicanos tu nombre

let nombre= prompt("Ingrese su nombre");
let apellido= prompt ("Ingrese su apellido");
let edad = Number (prompt ("Ingrese su edad") );
if (edad >= 18){
    alert ("Sos mayor de edad. Podes ingresar");}
else { 
    alert("Sos menor de edad. No podes ingresar"); 
    const persona1 = {nombre: nombre, apellido:apellido, edad:edad };
    console.log (persona);
} 

const persona = { 
    nombre: (nombre),
    apellido: (apellido),
    edad: (edad),
    
};

function mostrardatos() {
    console.log ("Nombre: " + persona.nombre)
    console.log ("Apellido: " + persona.apellido)
    console.log ("Edad: " + persona.edad)
}

function saludar ( cliente) {
    console.log ("Hola " + nombre);
    }
    saludar("cliente");
    

if (persona.edad >= 18) {
    mostrardatos ();
} else { 
    console.log ("No! Es menor de edad!");
}


let dia = prompt("Ingrese un dia: " + "\n" + "Lunes" + "\n" + "Martes" + "\n" + "Miercoles" + "\n" + "Jueves" + "\n" + "Viernes" + "\n" + "Sabado") .toUpperCase();

let diaError = false

if ((dia === "LUNES" ) || (dia === "MARTES" ) || (dia === "MIERCOLES" ) || (dia === "JUEVES" ) || (dia === "VIERNES" ) || (dia === "SABADO" )) {
    alert ("Tu entrega sera el dia " + dia);
}else {
    alert  (prompt("Dia incorrecto"))
}


let fecha = prompt("Ingrese una fecha " + "\n" + "De 1 a 30")

for (let i = 10; i <= 20; i++){
    if ( i== 10 ) {
        break;
    }
    alert (i);
}

alert ("Bienvenido nuevamente: " + nombre + "\n" + "Tu entrega sera el dia: " + dia + fecha )

alert ("Gracias por visitarnos")


// array

const productos = ["Procesadores", "Mothers", "PlacasGraficas", "Fuentes", "Almacenamientos", "Perifericos", "Gabinetes", "Mousepads"];

console.log (productos);
console.log (productos[0])


/* lenght */
console.log (productos.length);
for (let i = 0; i < productos.length; i++){
    console.log(productos [i]);
}

function Producto(FuenteSentey, $15000) {
    this.nombre = FuenteSentey;
    this.precio = $15000; 
    }