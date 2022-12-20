const productsInCartPage = JSON.parse(localStorage.getItem("productosEnCarrito"));

const containerCartEmpty = document.querySelector(".cartEmpty");
const containerCartProductContainer = document.querySelector(".cartProductContainer");
const containerCartActions = document.querySelector(".cartActions");
const containerCartPurchase = document.querySelector(".cartPurchase");


if (productsInCartPage) {
    containerCartEmpty.classList.add("disabled");
    containerCartProductContainer.classList.remove("disabled");
    containerCartActions.classList.remove("disabled");
    containerCartPurchase.classList.add("disabled");

    containerCartProductContainer.innerHTML ="";    

    productsInCartPage.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("cartProductContainer");
        div.innerHTML = `
        <div class="cartProduct">
            <img class="cartProductImg" src="${product.imagen}" alt="${product.titulo}" />
            <div class="cartProductTitle">
                <small>Titulo</small>
                <h3>${product.titulo}</h3>
            </div>
            <div class="cartProductAmount">
                <small>Cantidad</small>
                <h3>${product.cantidad}</h3>
            </div>
            <div class="cartProductPrice">
                <small>Precio</small>
                <h3>${product.precio}</h3>
            </div>
            <div class="cartProductSubtotal">
                <small>Subtotal</small>
                <h3>${product.precio*product.cantidad}</h3>
            </div> 
            <button class="cartProductDelete" id="${product.id}">
                <i class="fa-regular fa-trash-can"></i>
            </button>   
        </div>
        `;     
        containerCartProductContainer.append(div);

    })
   
}
else{
    containerCartEmpty.classList.remove("disabled");
    containerCartProductContainer.classList.add("disabled");
    containerCartActions.classList.add("disabled");
    containerCartPurchase.classList.add("disabled");
              

}



