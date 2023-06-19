document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("myForm");
    const dataContainer = document.getElementById("dataContainer");
    const dataForm = document.getElementById("dataForm");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const edad = document.getElementById("edad").value;
        const provincia = document.getElementById("provincia").value;

        const persona = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            provincia: provincia
        };

        guardarDatos(persona);
        mostrarResultados(persona);
    });

    function guardarDatos(persona) {
        const personaJSON = JSON.stringify(persona);
        
        localStorage.setItem("datosPersona", personaJSON);
    }
    function mostrarResultados(persona) {
        console.log("Nombre:", persona.nombre);
        console.log("Apellido:", persona.apellido);
        console.log("Edad:", persona.edad);
        console.log("Provincia:", persona.provincia);

        
        document.getElementById("nombreData").value = persona.nombre;
        document.getElementById("apellidoData").value = persona.apellido;
        document.getElementById("edadData").value = persona.edad;
        document.getElementById("provinciaData").value = persona.provincia;

        dataContainer.classList.remove("hidden");
    }

    const datosAlmacenados = localStorage.getItem("datosPersona");
    if (datosAlmacenados) {
        const personaAlmacenada = JSON.parse(datosAlmacenados);
        mostrarResultados(personaAlmacenada);
    }
});


///////////////////////* VEAMOS QUE ONDA */

/* let cartItems = [];

function addToCart(itemName, price) {
  cartItems.push({ itemName, price });
  updateCart();
}

function updateCart() {
    console.log('Productos añadidos:');
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(`Item Name: ${item.itemName}, Price: $${item.price}`);
    }
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    const itemNameElement = document.createElement('h4');
    itemNameElement.textContent = item.itemName;

    const priceElement = document.createElement('h3');
    priceElement.textContent = `$${item.price}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => removeItem(i));

    cartItemDiv.appendChild(itemNameElement);
    cartItemDiv.appendChild(priceElement);
    cartItemDiv.appendChild(removeButton);

    cartItemsElement.appendChild(cartItemDiv);
}
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
} */ 


let cartItems = [];

function addToCart(itemName, price) {
  cartItems.push({ itemName, price });
  updateCart();
  displayCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';

  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    const itemNameElement = document.createElement('h4');
    itemNameElement.textContent = item.itemName;

    const priceElement = document.createElement('h3');
    priceElement.textContent = `$${item.price}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => removeItem(i));

    cartItemDiv.appendChild(itemNameElement);
    cartItemDiv.appendChild(priceElement);
    cartItemDiv.appendChild(removeButton);

    cartItemsElement.appendChild(cartItemDiv);

    total += item.price;
  }

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: $${total}`;

  displayCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
  displayCart();
}

function displayCart() {
  console.log('Cart Items:');
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    console.log(`Item Name: ${item.itemName}, Price: $${item.price}`);
  }
  console.log(`Total: $${getTotal()}`);
}

function getTotal() {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total;
}
