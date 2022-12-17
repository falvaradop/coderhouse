// PRODUCTOS
const products = [
    // Barras
    {
        id: "barra01",
        titulo: "Barra de Chocolate Dark Milk",
        descripcion: "50 gramos de Chocolate con Leche. El chocolate con leche de Hacienda San José proporciona un sabor sofisticado a nuez con toques de canela y vainilla.",
        imagen: "../img/barras/darkmilk.jpg",
        categoria: {
            nombre: "Barras",
            id: "barras"
        },
        precio: 2
    },
    {
        id: "barra02",
        titulo: "Barra de Chocolate 55% Dark",
        descripcion: "50 gramos de chocolate semiamargo al 55%. Sus notas a panela, madera, miel y menta hacen que sea un chocolate balanceado y fácil de degustar para las personas que quieren comenzar a probar distintos porcentajes de cacao.",
        imagen: "../img/barras/dark55.jpg",
        categoria: {
            nombre: "Barras",
            id: "barras"
        },
        precio: 2
    },
    {
        id: "barra03",
        titulo: "Barra de Chocolate 70% Dark",
        descripcion: "50 gramos de chocolate. Si estas buscando una barra semiamarga o subir de porcentaje de cacao de una barra 55% o 60% esta barra es el paso perfecto. Es extremadamente suave y no demasiado dulce. Prometemos que será una de las barras de chocolate con un 70% más suaves que jamás hayas comido.",
        imagen: "../img/barras/dark70.jpg",
        categoria: {
            nombre: "Barras",
            id: "barras"
        },
        precio: 2
    },
    {
        id: "barra04",
        titulo: "Barra de Chocolate 80% Dark",
        descripcion: "50 gramos de chocolate negro al 80% de Hacienda San José te proporcionará un sabor sofisticado, es suave y lleno de aromas. Tiene pequeñas notas a nuez, canela y vainilla. Sin duda, este será uno de los mejores chocolate negros al 80% que jamás probarás.",
        imagen: "../img/barras/dark80.jpg",
        categoria: {
            nombre: "Barras",
            id: "barras"
        },
        precio: 2
    },
    {
        id: "barra05",
        titulo: "Barra de Chocolate 100% Dark",
        descripcion: "50 gramos de Chocolate San José puro y suave. Cuando lo comas déjalo que se derrita en tu boca. Nos encanta combinar este chocolate con vino tinto y frutos secos. Un chocolate 100%, te proporciona un impulso de energía, es nuestro preferido para actividades al aire libre y deportes.",
        imagen: "../img/barras/dark100.jpg",
        categoria: {
            nombre: "Barras",
            id: "barras"
        },
        precio: 2
    },
    // Bites
    {
        id: "bites01",
        titulo: "Bites de Chocolate Dark Milk",
        descripcion: "50 gramos de Chocolate con Leche. El chocolate con leche de Hacienda San José proporciona un sabor sofisticado a nuez con toques de canela y vainilla.",
        imagen: "../img/bites/darkmilk.jpg",
        categoria: {
            nombre: "Bites",
            id: "bites"
        },
        precio: 4
    },
    {
        id: "bites02",
        titulo: "Bites de Chocolate 55% Dark",
        descripcion: "50 gramos de chocolate semiamargo al 55%. Sus notas a panela, madera, miel y menta hacen que sea un chocolate balanceado y fácil de degustar para las personas que quieren comenzar a probar distintos porcentajes de cacao.",
        imagen: "../img/barras/dark55.jpg",
        categoria: {
            nombre: "Bites",
            id: "bites"
        },
        precio: 4
    },
    {
        id: "bites03",
        titulo: "Bites de Chocolate 70% Dark",
        descripcion: "50 gramos de chocolate. Si estas buscando una barra semiamarga o subir de porcentaje de cacao de una barra 55% o 60% esta barra es el paso perfecto. Es extremadamente suave y no demasiado dulce. Prometemos que será una de las barras de chocolate con un 70% más suaves que jamás hayas comido.",
        imagen: "../img/bites/dark70.jpg",
        categoria: {
            nombre: "Bites",
            id: "bites"
        },
        precio: 4
    },
    {
        id: "bites04",
        titulo: "Bites de Chocolate 80% Dark",
        descripcion: "50 gramos de chocolate negro al 80% de Hacienda San José te proporcionará un sabor sofisticado, es suave y lleno de aromas. Tiene pequeñas notas a nuez, canela y vainilla. Sin duda, este será uno de los mejores chocolate negros al 80% que jamás probarás.",
        imagen: "../img/bites/dark80.jpg",
        categoria: {
            nombre: "Bites",
            id: "bites"
        },
        precio: 4
    },
    {
        id: "bites05",
        titulo: "Bites de Chocolate 100% Dark",
        descripcion: "50 gramos de Chocolate San José puro y suave. Cuando lo comas déjalo que se derrita en tu boca. Nos encanta combinar este chocolate con vino tinto y frutos secos. Un chocolate 100%, te proporciona un impulso de energía, es nuestro preferido para actividades al aire libre y deportes.",
        imagen: "../img/bites/dark100.jpg",
        categoria: {
            nombre: "Bites",
            id: "bites"
        },
        precio: 4
    },
];

const productContainer = document.querySelector("#productContainer");

function loadProducts(){
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <div class="productBG">
            <img class="productImg" src="${product.imagen}" alt="${product.titulo}" />
            <div class="productDetail">
                <div class="productTitle">${product.titulo}</div>
                <div class="productPrice" >$${product.precio}</div>
                <button class="productBtnAdd" id="${product.id}">Agregar</button>
            </div>
        </div>
        `;
        productContainer.append(div);
    })
}

loadProducts();
