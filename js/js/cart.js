// let product = ["id", "name", "price", "vat", "sku", "description", "brand", "category", "subcategory", "especification" ]
//     for (let i=0; i<product.length; i++){
//         console.log(product[i]);
//     }

let chocolateBarra = [];
chocolateBarra [0] = "Barra de Chocolate Dark Milk";
chocolateBarra [1] = "Barra de Chocolate 55% Dark";
chocolateBarra [2] = "Barra de Chocolate 70% Dark";
chocolateBarra [3] = "Barra de Chocolate 80% Dark";
chocolateBarra.push("Barra de Chocolate 100% Dark");

let precioChocolateBarra = [];
for (let i=0; i<chocolateBarra.length; i++){
    precioChocolateBarra [i] = prompt ("ingresa el precio para " + chocolateBarra [i]);
}

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
    console.log("Nombre de barra: " + chocolateBarra [i]);
    console.log("Precio de barra: " + precioChocolateBarra [i]);
    }
}



// let chocolateBites =  [];
// chocolateBites [0] = "Bites de Chocolate Dark Milk";
// chocolateBites [1] = "Bites de Chocolate 55% Dark";
// chocolateBites [2] = "Bites de Chocolate 70% Dark";
// chocolateBites [3] = "Bites de Chocolate 80% Dark";
// chocolateBites [4] = "Bites de Chocolate 100% Dark";
// chocolateBites [5] = "Bites de Chocolate 200% Dark";
// chocolateBites.pop();
