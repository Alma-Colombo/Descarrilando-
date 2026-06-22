const productos = [
  {
    id: 1,
    nombre: "Descarrilando en pareja",
    imagen: "img/LIBRO.png",
    descripcion: "Descarrilando en Pareja es un libro de tapa dura con 54 actividades sorpresa, cada una escondida abajo de una raspadita.",
    precio: 56800,
    stock: 25
  },
  {
    id: 2,
    nombre: "Descarrilando en familia",
    imagen: "img/LIBRO2.png",
    descripcion: "Descarrilando en Familia es un libro de tapa dura con 52 actividades sorpresa, cada una escondida debajo de una raspadita.",
    precio: 52400,
    stock: 20
  },
  {
    id: 3,
    nombre: "Te toca! El juego de cartas",
    imagen: "img/juegotetoca.png",
    descripcion: "Te Toca! es un juego de cartas rápido, simple y muy divertido, ideal para esos momentos en los que nadie quiere hacerse cargo de algo… o cuando simplemente quieren sumar un poco de humor al día.",
    precio: 52000,
    stock: 70
  },
  {
    id: 4,
    nombre: "Juego Te Toca! De Bolsillo",
    imagen: "img/juegodebolsillo.png",
    descripcion: "Juego de bolsillo es un juego de cartas rápido, simple y muy divertido, ideal para esos momentos en los que nadie quiere hacerse cargo de algo… o cuando simplemente quieren sumar un poco de humor al día.",
    precio: 25070,
    stock: 50
  },
  {
    id: 5,
    nombre: "Pido Pausa en pareja",
    imagen: "img/pidopausapareja.png",
    descripcion: "Pido Pausa no es un juego tradicional.Es un mazo de 55 cartas con 4 categorías para conectar de distintas maneras.No hay reglas ni un orden a seguir: úsenlas cuando las necesiten, cuando quieran, o cuando simplemente quieran un momento junt@s.",
    precio: 25070,
    stock: 10
  },
  {
    id: 6,
    nombre: "Pido Pausa en familia",
    imagen: "img/pidopausafamilia.png",
    descripcion: "Pido Pausa en familia no es un juego como los demás.Es un mazo de 55 cartas creado para que la familia frene un ratito y se vuelva a encontrar.Tiene 4 categorías distintas para elegir según lo que necesiten en ese momento.No hay turnos ni reglas: solo lo usan cuando quieran y disfrutan del momento",
    precio: 25070,
    stock: 24
  },
  {
    id: 7,
    nombre: "COMBO COMPLETO DECARRILANDO",
    imagen: "img/combocompleto.png",
    descripcion: "Combo incluye:- descarrilando en pareja- Descarrilando en familia- Te Toca! imantado- Te Toca! de bolsill- Pido Pausa en pareja- Pido pausa en familia ",
    precio:212770,
    stock: 17
  },
  {
    id: 8,
    nombre: "Combo Anti Rutina",
    imagen: "img/comboantirutina.png",
    descripcion: "Este combo incluye dos productos creados para crear momentos especiales: Descarrilando en Pareja, un libro de experiencias, y Pido Pausa en Pareja, un juego de cartas pensado para fomentar la comunicación y la conexión.",
    precio: 73000,
    stock: 14
  },
  {
    id: 9,
    nombre: "Combo De bolsillo: Te toca de bolsillo, Pido Pausa en Pareja y en Familia",
    imagen: "img/comboo2.png",
    descripcion: "El combo para conectar en todos los momentos sin vueltas · Pausar la rutina · Volver a charlar",
    precio: 67690,
    stock: 30
  },
  {
    id: 10,
    nombre: "Combo Familia: Descarrilando en familia + Pido Pausa en familia",
    imagen: "img/comboo3.png",
    descripcion: "El Combo Familia reúne dos propuestas pensadas para lo mismo: crear momentos reales juntos.Incluye Descarrilando en Familia, un libro de experiencias, y Pido Pausa en Familia, un juego de cartas para frenar, hablar y conectar.Una combinación simple y potente para salir de la rutina y generar espacios de risa, conversación y tiempo de calidad.",
    precio: 69360,
    stock: 27
  }
];

function cargar() {
    for (let i = 0; i < productos.length; i = i + 1) {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productos[i].nombre}</h2>
                        <img src="${productos[i].imagen}" alt="" id="" width="200">
                        <p id="detalle">${productos[i].descripcion}</p>
                        <h3 id="precio">$ ${productos[i].precio}</h3>
                        <p id="stock">${productos[i].stock}</p>
                        <button id="btndetalle" onclick="verdetalle(${productos[i].id})">Ver detalle</button>`
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}
cargar()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href ="detalle.html"
}