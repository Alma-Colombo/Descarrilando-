const productoGuardado = JSON.parse(localStorage.getItem("producto") || "null");
let cantidadSeleccionada = 1;

const updateCartCounter = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const totalProductos = carrito.reduce((total, producto) => total + Number(producto.cantidad || 0), 0);
  const contador = document.getElementById("contadorcarrito");

  if (!contador) return;

  contador.textContent = totalProductos;
  contador.style.display = totalProductos > 0 ? "flex" : "none";
};

const actualizarCantidadTexto = () => {
  const contador = document.getElementById("cantidad");
  const botonRestar = document.getElementById("btn-restar");

  if (contador) contador.textContent = cantidadSeleccionada;
  if (botonRestar) botonRestar.disabled = cantidadSeleccionada <= 1;
};

const restar = () => {
  if (cantidadSeleccionada > 1) {
    cantidadSeleccionada -= 1;
    actualizarCantidadTexto();
  }
};

const sumar = () => {
  if (!productoGuardado) return;

  if (cantidadSeleccionada < Number(productoGuardado.stock)) {
    cantidadSeleccionada += 1;
    actualizarCantidadTexto();
  } else {
    alert("Stock máximo alcanzado");
  }
};

const agregar = () => {
  if (!productoGuardado) return;

  if (cantidadSeleccionada <= 0) {
    alert("Ingrese la cantidad de productos");
    return;
  }

  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const productoExistente = carrito.find((producto) => producto.id === productoGuardado.id);

  if (productoExistente) {
    productoExistente.cantidad += cantidadSeleccionada;
    productoExistente.precio = Number(productoGuardado.precio) * productoExistente.cantidad;
  } else {
    carrito.push({
      id: productoGuardado.id,
      imagen: productoGuardado.imagen,
      nombre: productoGuardado.nombre,
      cantidad: cantidadSeleccionada,
      precio: Number(productoGuardado.precio) * cantidadSeleccionada
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  updateCartCounter();
  window.location.href = "carrito.html";
};

const cargar = () => {
  const contenedor = document.getElementById("boxproductos");

  if (!contenedor || !productoGuardado) {
    if (contenedor) {
      contenedor.innerHTML = "<p>No se encontró el producto.</p>";
    }
    return;
  }

  contenedor.innerHTML = `
    <div id="boxproducto">
      <h2 id="nombre">${productoGuardado.nombre}</h2>
      <img src="${productoGuardado.imagen}" alt="${productoGuardado.nombre}" width="200">
      <p id="detalle">${productoGuardado.descripcion}</p>
      <h3 id="precio">$ ${productoGuardado.precio}</h3>
      <p id="stock">Stock: ${productoGuardado.stock}</p>
      <div class="cantidad">
        <button id="btn-restar" class="qty-btn" type="button">-</button>
        <span id="cantidad">1</span>
        <button id="btn-anadir" class="qty-btn" type="button">+</button>
      </div>
      <button id="btndetalle" type="button">Añadir al carrito</button>
    </div>
  `;

  document.getElementById("btn-restar").addEventListener("click", restar);
  document.getElementById("btn-anadir").addEventListener("click", sumar);
  document.getElementById("btndetalle").addEventListener("click", agregar);
  actualizarCantidadTexto();
};

updateCartCounter();
cargar();
