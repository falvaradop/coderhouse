// const IVA = 12;
// const ESPACIO = " ";

// ingreso de datos del usuario
let nombre = prompt("ingrese su Nombre");
let apellido = prompt("ingrese su Apellido");
let cedula = prompt("ingrese su cedula");
let celular = prompt("ingrese su celular");
let anioNacimiento = prompt("ingresa tu año de nacimiento");
let idUser = false;

if ((anioNacimiento <= 2005) && (anioNacimiento !="")){
    idUser = true;
    console.log("anio de nacimiento correcto para realizar compra");
}
else if (anioNacimiento == ""){
    alert ("No has ingresado un anio de nacimiento");
}

else if (anioNacimiento > 2022){
    alert ("Vienes del futuro o todavia no has nacido");
}
else{
    alert ("Tienes que ser mayor de edad para poder realizar un compra en el sitio");
}

if (idUser == true) {
//carrito de compra
let cambiarCantidad = "Si";
    let cantidadProducto = prompt("ingrese la cantidad de productos que desea comprar");      
        if ((cantidadProducto > 0) && (cambiarCantidad === "Si")){
                let cambiarCantidad = prompt ("desea cambiar la cantidad de productos? (Si/No)");
                    if ((cambiarCantidad == "si") || (cambiarCantidad == "Si") || (cambiarCantidad == "SI")){
                        cantidadProducto = prompt("ingrese la NUEVA cantidad de productos que desea comprar"); 
                        alert ("La nueva cantidad de productos en su carrito es: " + cantidadProducto);
                        cambiarCantidad = "Si";
                        
                    }
                    else if ((cambiarCantidad == "no") || (cambiarCantidad == "No") || (cambiarCantidad == "NO")){
                        cambiarCantidad === "No";
                        alert ("El valor no cambio, la cantidad a comprar es: " + cantidadProducto);
                        
                    }
                    else{
                        alert ("ingrese correctamente el valor: Si o No");
                        cambiarCantidad = "No";
                        
                    }
        }
        else {
            alert ("La cantidad de productos a comprar no puede ser menor a 0");
            
        }
    }
function resumen(){
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Cedula: " + cedula);
    console.log("Apellido: " + celular);
    console.log("Cedula: " + cedula);
    console.log("Anio de nacimiento: " + anioNacimiento);
}

console.log("El resumen de los datos ingresados es:");
resumen();