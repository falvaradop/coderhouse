
let nombreChocolate = [];
nombreChocolate [0] = "Barra de Chocolate Dark Milk";
nombreChocolate [1] = "Barra de Chocolate 55% Dark";
nombreChocolate [2] = "Barra de Chocolate 70% Dark";
nombreChocolate [3] = "Barra de Chocolate 80% Dark";
nombreChocolate [4] = "Barra de Chocolate 100% Dark";
// chocolateBarra.push("Barra de Chocolate 100% Dark");

let descriptionChocolate = [];
descriptionChocolate[0] = "50 gramos de Chocolate con Leche. El chocolate con leche de Hacienda San José proporciona un sabor sofisticado a nuez con toques de canela y vainilla.";
descriptionChocolate[1] = "50 gramos de chocolate semiamargo al 55%. Sus notas a panela, madera, miel y menta hacen que sea un chocolate balanceado y fácil de degustar para las personas que quieren comenzar a probar distintos porcentajes de cacao.";
descriptionChocolate[2] = "50 gramos de chocolate. Si estas buscando una barra semiamarga o subir de porcentaje de cacao de una barra 55% o 60% esta barra es el paso perfecto. Es extremadamente suave y no demasiado dulce. Prometemos que será una de las barras de chocolate con un 70% más suaves que jamás hayas comido.";
descriptionChocolate[3] = "50 gramos de chocolate negro al 80% de Hacienda San José te proporcionará un sabor sofisticado, es suave y lleno de aromas. Tiene pequeñas notas a nuez, canela y vainilla. Sin duda, este será uno de los mejores chocolate negros al 80% que jamás probarás.";
descriptionChocolate[4] = "50 gramos de Chocolate San José puro y suave. Cuando lo comas déjalo que se derrita en tu boca. Nos encanta combinar este chocolate con vino tinto y frutos secos. Un chocolate 100%, te proporciona un impulso de energía, es nuestro preferido para actividades al aire libre y deportes.";

let precioChocolate = [];
precioChocolate[0]=2;
precioChocolate[1]=2;
precioChocolate[2]=2;
precioChocolate[3]=2;
precioChocolate[4]=2;

let precioAnteriorChocolate = [];
precioAnteriorChocolate[0]=4;
precioAnteriorChocolate[1]=4;
precioAnteriorChocolate[2]=2;
precioAnteriorChocolate[3]=2;
precioAnteriorChocolate[4]=2;

let photoChocolate = [];
photoChocolate[0]="./img/darkmilk.jpg";
photoChocolate[1]="./img/dark55.jpg";
photoChocolate[2]="./img/dark70.jpg";
photoChocolate[3]="./img/dark80.jpg";
photoChocolate[4]="./img/dark100.jpg";

let btnChocolate = [];
btnChocolate[0]="agregar al carrito";
btnChocolate[1]="agregar al carrito";
btnChocolate[2]="agregar al carrito";
btnChocolate[3]="agregar al carrito";
btnChocolate[4]="agregar al carrito";


class Products {
    constructor (id , photoChocolate, nombreChocolate,descriptionChocolate, precioChocolate, precioAnteriorChocolate, btnChocolate){
        this.id = id;
        this.photoChocolate = photoChocolate;
        this.nombreChocolate = nombreChocolate;
        this.descriptionChocolate = descriptionChocolate;
        this.precioChocolate = precioChocolate;
        this.precioAnteriorChocolate = precioAnteriorChocolate;
        this.btnChocolate = btnChocolate;

    }
}

const product0 = new Products (000,photoChocolate[0], nombreChocolate[0], descriptionChocolate[0], precioChocolate[0], precioAnteriorChocolate[0], btnChocolate[0]);
const product1 = new Products (001,photoChocolate[1], nombreChocolate[1], descriptionChocolate[1], precioChocolate[1], precioAnteriorChocolate[1], btnChocolate[1]);
const product2 = new Products (002,photoChocolate[2], nombreChocolate[2], descriptionChocolate[2], precioChocolate[2], precioAnteriorChocolate[2], btnChocolate[2]);
const product3 = new Products (003,photoChocolate[3], nombreChocolate[3], descriptionChocolate[3], precioChocolate[3], precioAnteriorChocolate[3], btnChocolate[3]);
const product4 = new Products (004,photoChocolate[4], nombreChocolate[4], descriptionChocolate[4], precioChocolate[4], precioAnteriorChocolate[4], btnChocolate[4]);

const BD = [product0, product1, product2, product3, product4];

const IVA = 1.12
localStorage.setItem("imp", IVA);


const carrito = BD.map((el)=>{
    return{
        id:el.id,
        photoChocolate:el.photoChocolate,
        nombreChocolate:el.nombreChocolate,
        descriptionChocolate:el.descriptionChocolate,
        precioChocolate:el.precioChocolate * IVA,
        precioAnteriorChocolate:el.precioAnteriorChocolate,
        btnChocolate:el.btnChocolate
    }
}
)
console.log(carrito)

let shopContent = document.getElementById("shopContent")

BD.forEach((Products)=>{
    let contentCard = document.createElement("div")
    contentCard.className = "stores col-3 d-inline-flex";
    contentCard.innerHTML = ` 
        <div class="storesBG">
            <img src=${Products.photoChocolate} class="img-fluid storesImg" alt="Logo store" />
            <div class = "storesTitle">${Products.nombreChocolate}</div>
            <div class = "storesPrice">$ ${Products.precioChocolate}</div>
            <button type="submit" id="priceBtn">${Products.btnChocolate}</button>
        </div>
    
    `;
    shopContent.append(contentCard)
})


//... suma total
const sumaTotal = carrito.reduce((acc,el)=>acc + el.precioChocolate, 0)
console.log("el valor total del carrito es " +sumaTotal)

//...filtro de productos con descuento

let descuento = BD.filter((el)=>el.precioAnteriorChocolate > el.precioChocolate)
console.log(descuento)

let botonAlert = document.getElementById("priceBtn")
botonAlert.addEventListener('click',llamarBoton)

function llamarBoton(){
    Swal.fire(
        'Producto agregado',
        'Seguir comprando',
        'question',
      )

}

//grabo localmente el nombre del usuario que va a realizar la compra

const usuario = {
    nombre: "Francisco",
    apellido: "Alvarado",
    pais: "Ecuador",
    ciudad: "Guayaquil",
    direccion: "Los Alamos",
    email: "falvarad@gmail.com",
    dni: 0914751276,
    celular: 593997165165,
}

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);
localStorage.setItem("usuario", usuarioJSON);

//regreso a usuario a formato objeto    

const usuarioLocalStorage = localStorage.getItem("usuario");
const usuarioObjetoParse = JSON.parse(usuarioLocalStorage);
console.log(usuarioObjetoParse);