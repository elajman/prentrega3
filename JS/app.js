const fetchApi = async() => {
    try{
        const respuesta = await fetch("./JS/productos.json")
        const productosApi = await respuesta.json()
        carritoLocal(productosApi)
        console.log(productosApi)
        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            console.log(datos)
        }
    } catch (error) {
        console.log(error)
    }
  }
  
  fetchApi()
  
  function carritoLocal(productos) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) ? JSON.parse(localStorage.getItem("carrito")) : []
  
const cantidadCarrito = document.getElementById("cantidadEnCarrito")
const verCarrito = document.getElementById("verCarrito")
const shopContent = document.getElementById("shopContenido")
const modalContainer = document.getElementById("modal-container")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
buscar.onclick = filtrar

//Renderizo carrito
function renderProductos(nuevoArray) {
    shopContent.innerHTML = ""
    nuevoArray.forEach((producto) => {
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "card"
        tarjetaProducto.innerHTML = `
        <h4>${producto.nombre}</h4>
        <img src=${producto.imgUrl}>
        <p class="precio">USD${producto.precio}</p>
        <p>Quedan ${producto.stock} Unidades</p>
        `
        shopContent.append(tarjetaProducto)
        let comprar = document.createElement("button")
        comprar.innerText = "comprar"
        comprar.className = "comprar"

        tarjetaProducto.append(comprar)

        comprar.addEventListener("click", () => {
            //sumo cantidades en carrito
            const seRepite = carrito.some((repiteProducto) => repiteProducto.id === producto.id)
            if (seRepite) {
                carrito.map((prod) => {
                    if (prod.id == producto.id) {
                        prod.cantidad++
                    }
                })
            } else {
                carrito.push({
                    id: producto.id,
                    imgUrl: producto.imgUrl,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    stock: producto.stock,
                    cantidad: producto.cantidad
                })
            }

            Toastify({
                text: "Producto agregado al carrito",
                duration: 1000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast()

            carritoContador()
            salvoLocal()
         
        })

    })

}
renderProductos(productos)

//busco por categoria
function filtrar(e) {
    console.log("E", e.target.id)
    let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
    console.log(productosFiltrados)
    renderProductos(productosFiltrados)
}

const salvoLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const muestroCarrito = () => {

    verCarrito.addEventListener("click", () => {
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
                <p class="precio">usd.${product.precio}</p>
                <p>Quedan ${product.stock} Unidades</p>
                <span class="sumo"> + </span>
                <span class="resto"> - </span>
                <p>Cantidad: ${product.cantidad}</>
                <button class="btn btn-success" id=${product.id}>Comprar</button>
                <p>Total: $${product.cantidad * product.precio}</p>
                `
            if (product.stock < 10) {
                carritoContent.classList.add("pocoStock")
                let pocasUnidades = document.createElement('h6')
                pocasUnidades.innerText = "Quedan pocas unidades"
                carritoContent.appendChild(pocasUnidades)

            }
            modalContainer.append(carritoContent)

            let restar = carritoContent.querySelector(".resto")
            restar.addEventListener("click", () => {
                if (product.cantidad !== 1) {
                    product.cantidad--
                }
                salvoLocal()
                muestroCarrito()
            })

            let sumar = carritoContent.querySelector(".sumo")
            sumar.addEventListener("click", () => {
                product.cantidad++
                salvoLocal()
                muestroCarrito()
            })

            let elimino = document.createElement("button")
            elimino.innerText = "Eliminar Producto"
            elimino.className = "btn btn-danger"
            carritoContent.append(elimino)

            elimino.addEventListener("click", eliminoProducto)

            let finalizoCompra = document.getElementById(product.id)
            finalizoCompra.addEventListener("click", () => {
                localStorage.removeItem("carrito")
                carrito = []
                muestroCarrito()
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
verCarrito.addEventListener("click", muestroCarrito)

const eliminoProducto = () => {
    const encuentroId = carrito.find((elemento) => elemento.id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encuentroId

    })
    carritoContador()
    salvoLocal()
    pintarCarrito()
}

const carritoContador = () => {
    cantidadCarrito.style.display = "flex"
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
}