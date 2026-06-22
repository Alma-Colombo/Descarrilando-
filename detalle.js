function cargar() {
        let producto = localStorage.getItem("producto")
        let productojson = JSON.parse(producto)
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
                parrafo.innerHTML=`<h2 id="nombre">${productojson.nombre}</h2>
                                                <img src="${productojson.imagen}" alt="" id="" width="200">
                                                <p id="detalle">${productojson.descripcion}</p>
                                                <h3 id="precio">$ ${productojson.precio}</h3>
                                                <p id="stock">Stock: ${productojson.stock}</p>
                                                <div class="cantidad">
                                                        <button id="btn-decrease" class="qty-btn">-</button>
                                                        <span id="cantidad">1</span>
                                                        <button id="btn-increase" class="qty-btn">+</button>
                                                </div>
                                                <button id="btndetalle" onclick="verdetalle()">Añadir al carrito</button>`

                document.getElementById("boxproductos").appendChild(parrafo)

                // Lógica para controlar cantidad respetando el stock
                let stock = Number(productojson.stock) || 0
                let qty = 1
                const qtySpan = parrafo.querySelector('#cantidad')
                const btnInc = parrafo.querySelector('#btn-increase')
                const btnDec = parrafo.querySelector('#btn-decrease')

                function updateButtons(){
                        btnInc.disabled = qty >= stock
                        btnDec.disabled = qty <= 1
                }

                btnInc.addEventListener('click', ()=>{
                        if(qty < stock){
                                qty++
                                qtySpan.textContent = qty
                                updateButtons()
                        }
                })

                btnDec.addEventListener('click', ()=>{
                        if(qty > 1){
                                qty--
                                qtySpan.textContent = qty
                                updateButtons()
                        }
                })

                // Estado inicial
                if(stock <= 0){
                        qty = 0
                        qtySpan.textContent = 0
                        btnInc.disabled = true
                        btnDec.disabled = true
                } else {
                        qty = 1
                        qtySpan.textContent = 1
                        updateButtons()
                }

}

cargar()