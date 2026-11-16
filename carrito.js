const getCarrito = () => JSON.parse(localStorage.getItem("carrito") || "[]");

const updateCartCounter = () => {
  const carrito = getCarrito();
  const totalProductos = carrito.reduce((total, producto) => total + Number(producto.cantidad || 0), 0);
  const contador = document.getElementById("contadorcarrito");

  if (!contador) return;

  contador.textContent = totalProductos;
  contador.style.display = totalProductos > 0 ? "flex" : "none";
};

const renderCarrito = () => {
  const carrito = getCarrito();
  const lista = document.getElementById("lista");
  const totalapagar = document.getElementById("totalapagar");

  if (!lista || !totalapagar) return;

  lista.innerHTML = "";

  if (!carrito.length) {
    lista.innerHTML = '<tr><td colspan="5">Tu carrito está vacío.</td></tr>';
    totalapagar.textContent = "Precio total = $ 0";
    updateCartCounter();
    return;
  }

  let total = 0;

  carrito.forEach((producto) => {
    const fila = document.createElement("tr");
    fila.id = `producto-${producto.id}`;
    total += Number(producto.precio || 0);

    fila.innerHTML = `
      <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
      <td>${producto.cantidad}</td>
      <td>${producto.nombre}</td>
      <td>$ ${producto.precio}</td>
      <td><button type="button" class="btn-eliminar" data-id="${producto.id}">Eliminar</button></td>
    `;

    lista.appendChild(fila);
  });

  totalapagar.textContent = `Precio total = $ ${total}`;
  updateCartCounter();
};

const eliminarProducto = (idProducto) => {
  const carrito = getCarrito().filter((producto) => producto.id !== idProducto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
};

const finalpago = () => {
  const carrito = getCarrito();
  const total = carrito.reduce((suma, producto) => suma + Number(producto.precio || 0), 0);

  alert(`¡Gracias por su compra! Total a pagar: $${total}`);
  localStorage.removeItem("carrito");
  renderCarrito();
};

const lista = document.getElementById("lista");
if (lista) {
  lista.addEventListener("click", (event) => {
    const boton = event.target.closest(".btn-eliminar");

    if (!boton) return;

    const { id } = boton.dataset;
    eliminarProducto(id);
  });
}

const boton = document.getElementById("finalizarcompra");
if (boton) {
  boton.addEventListener("click", finalpago);
}

renderCarrito();
