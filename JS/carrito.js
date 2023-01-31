const pintarCarrito = () => {
verCarrito.addEventListener('click', () => {
    modalContainer.innerHTML = ""
    const modalHeader = document.createElement('div')
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h3 class="modal-header-item"></h3>
    `
    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h4")
    modalButton.innerText = "X"
    modalButton.className = "modal-header-button"
    modalButton.addEventListener('click', () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton)
    
    carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <h3>${product.nombre}</h3>
    <img src=${product.imgUrl}>
    <p class="precio">USD${product.precio}</p>
    <p>Quedan ${product.stock} Unidades</p>
    <span class="sumo"> + </span>
    <span class="resto"> - </span>
    <p>Cantidad: ${product.cantidad}</>
    <p>Total: ${product.cantidad * product.precio}</p>
    <button class="btn btn-success" id=${product.id}>Comprar</button>
    `
    if (product.stock < 10) {
        carritoContent.classList.add("pocoStock")
        let pocasUnidades = document.createElement('h5')
        pocasUnidades.innerText = "Quedan pocas unidades"
        carritoContent.appendChild(pocasUnidades)
  
      }
        modalContainer.append(carritoContent)
        
        let restar = carritoContent.querySelector(".resto")
        restar.addEventListener("click", () => {
            if(product.cantidad !== 1){
            product.cantidad--
            }
            salvoLocal()
            pintarCarrito()
        }) 

        let sumar = carritoContent.querySelector(".sumo")
        sumar.addEventListener("click", () => {    
            product.cantidad++
            salvoLocal()
            pintarCarrito()
        }) 


        let elimino = document.createElement("button")
        elimino.innerText = "Eliminar"
        elimino.className = "btn btn-danger"
        carritoContent.append(elimino)

        elimino.addEventListener("click", eliminoProducto)

        let finalizoCompra = document.getElementById(product.id)
        finalizoCompra.addEventListener("click", () => {
            localStorage.removeItem("carrito")
            carrito = []
            pintarCarrito()
            cantidadCarrito.style.display = "none"
            muestroSweetAlert('Gracias por su compra', false)
            modalContainer.style.display = "none"
        })
        

    })
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a Pagar: $${total}`
    modalContainer.append(totalCompra)
    })
}
verCarrito.addEventListener("click", pintarCarrito)

const eliminoProducto = () => {
    const encuentroId = carrito.find((element) => element.id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encuentroId
    })
    carritoContador()
    salvoLocal()
    pintarCarrito()
}

const carritoContador = () => {
    cantidadCarrito.style.display = "block"
    const carritoJson = carrito.length
    localStorage.setItem("carritoJson", JSON.stringify(carritoJson))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoJson"))
}
    carritoContador()

    function muestroSweetAlert(titulo, texto, icono) {
        Swal.fire({
          title: titulo,
          text: texto,
          icon: icono,
        })
      }

