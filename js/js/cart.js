//entrega 2 curso JS Francisco Alvarado

let chocolateBarra = [];
chocolateBarra [0] = "Barra de Chocolate Dark Milk";
chocolateBarra [1] = "Barra de Chocolate 55% Dark";
chocolateBarra [2] = "Barra de Chocolate 70% Dark";
chocolateBarra [3] = "Barra de Chocolate 80% Dark";
chocolateBarra [4] = "Barra de Chocolate 100% Dark";
// chocolateBarra.push("Barra de Chocolate 100% Dark");

let descriptionChocolateBarra = [];
descriptionChocolateBarra[0] = "50 gramos de Chocolate con Leche. El chocolate con leche de Hacienda San José proporciona un sabor sofisticado a nuez con toques de canela y vainilla.";
descriptionChocolateBarra[1] = "50 gramos de chocolate semiamargo al 55%. Sus notas a panela, madera, miel y menta hacen que sea un chocolate balanceado y fácil de degustar para las personas que quieren comenzar a probar distintos porcentajes de cacao.";
descriptionChocolateBarra[2] = "50 gramos de chocolate. Si estas buscando una barra semiamarga o subir de porcentaje de cacao de una barra 55% o 60% esta barra es el paso perfecto. Es extremadamente suave y no demasiado dulce. Prometemos que será una de las barras de chocolate con un 70% más suaves que jamás hayas comido.";
descriptionChocolateBarra[3] = "50 gramos de chocolate negro al 80% de Hacienda San José te proporcionará un sabor sofisticado, es suave y lleno de aromas. Tiene pequeñas notas a nuez, canela y vainilla. Sin duda, este será uno de los mejores chocolate negros al 80% que jamás probarás.";
descriptionChocolateBarra[4] = "50 gramos de Chocolate San José puro y suave. Cuando lo comas déjalo que se derrita en tu boca. Nos encanta combinar este chocolate con vino tinto y frutos secos. Un chocolate 100%, te proporciona un impulso de energía, es nuestro preferido para actividades al aire libre y deportes.";


let precioChocolateBarra = [];
for (let i=0; i<chocolateBarra.length; i++){
    precioChocolateBarra [i] = prompt ("ingresa el precio para " + chocolateBarra [i]);
    
}

class Products {
    constructor (id , chocolateBarra, precioChocolateBarra, descriptionChocolateBarra){
        this.id = id;
        this.chocolateBarra = chocolateBarra;
        this.precioChocolateBarra = precioChocolateBarra;
        this.descriptionChocolateBarra = descriptionChocolateBarra;   
    }
}

const product0 = new Products (000,chocolateBarra[0], precioChocolateBarra[0], descriptionChocolateBarra[0]);
const product1 = new Products (001,chocolateBarra[1], precioChocolateBarra[1], descriptionChocolateBarra[1]);
const product2 = new Products (002,chocolateBarra[2], precioChocolateBarra[2], descriptionChocolateBarra[2]);
const product3 = new Products (003,chocolateBarra[3], precioChocolateBarra[3], descriptionChocolateBarra[3]);
const product4 = new Products (004,chocolateBarra[4], precioChocolateBarra[4], descriptionChocolateBarra[4]);

const BD = [product0, product1, product2, product3, product4];

// console.log("Este es del detalle de productos en la base de datos:");
// console.log(BD);

console.log("El detalle de los items en el carrito es:")
BD.forEach((element)=>{
    console.log(element.chocolateBarra);
    console.log(element.precioChocolateBarra);
    console.log(element.descriptionChocolateBarra);
})

let deleteChocolate = prompt ("Deseas eliminar algun chocolate? (Si/No)");
    if ((deleteChocolate == "si") || (deleteChocolate == "Si") || (deleteChocolate == "SI")){
        let deleteChocolateRecord = prompt("ingrese el numero del producto a eliminar: \n (0) Barra de Chocolate Dark Milk \n (1) Barra de Chocolate 55% Dark \n (2) Barra de Chocolate 70% Dark \n (3) Barra de Chocolate 80% Dark \n (4) Barra de Chocolate 100% Dark"); 
        console.log("Se elimino la " +chocolateBarra[deleteChocolateRecord]);
        chocolateBarra.splice(deleteChocolateRecord,1);
        precioChocolateBarra.splice(deleteChocolateRecord,1);
        resumen();

    }
    else if ((deleteChocolate == "no") || (deleteChocolate == "No") || (deleteChocolate == "NO")){
        alert ("El valor no cambio");
        resumen();        
    }
    else{
        alert ("No ingreso correctamente el valor Si/No");        
    }

function resumen(){
    for (let i=0; i<chocolateBarra.length; i++){
    alert("Nombre de barra: " + chocolateBarra [i] + "\nPrecio de barra: " + precioChocolateBarra [i] + "\nDescripcion de barra: " + descriptionChocolateBarra [i]);
    }
}
