const fetchApi = async () => {
    try {
        const respuesta = await fetch("./JS/productos.json")
        const productosApi = await respuesta.json()
        carritoLocal(productosApi)
    } catch (error) {
        return error
    }
}

fetchApi()

const cantidadCarrito = document.getElementById("cantidadEnCarrito")
const verCarrito = document.getElementById("verCarrito")
const shopContent = document.getElementById("shopContenido")
const modalContainer = document.getElementById("modal-container")

function carritoLocal(productos) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) ? JSON.parse(localStorage.getItem("carrito")) : []

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

            //sumo cantidades en carrito de un mismo producto
            comprar.addEventListener("click", () => {
                const seRepiteProducto = carrito.some((repiteProducto) => repiteProducto.id === producto.id)
                if (seRepiteProducto) {
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
        let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
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

            modalContainer.append(modalHeader)

            const botonComprar = document.createElement("button")
            botonComprar.innerText = "Comprar"
            botonComprar.className = "btn btn-success"
            botonComprar.addEventListener('click', () => {
                localStorage.removeItem("carrito")
                carrito = []
                muestroCarrito()
                cantidadCarrito.style.display = "none"
                muestroSweetAlert('Gracias por su compra', false)
                modalContainer.style.display = "none"

            })

            modalHeader.appendChild(botonComprar)

            carrito.forEach((producto) => {
                let carritoContent = document.createElement("div")
                carritoContent.className = "modal-content"
                carritoContent.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src=${producto.imgUrl}>
                <p class="precio">usd.${producto.precio}</p>
                <p>Quedan ${producto.stock} Unidades</p>
                <button class="sumo btn btn-primary"> + </button>
                <button class="resto btn btn-primary"> - </button>
                <p>Cantidad: ${producto.cantidad}</>
                <p>Total: $${producto.cantidad * producto.precio}</p>
                `
                if (producto.stock < 10) {
                    carritoContent.classList.add("pocoStock")
                    let pocasUnidades = document.createElement('h6')
                    pocasUnidades.innerText = "Quedan pocas unidades"
                    carritoContent.appendChild(pocasUnidades)

                }
                modalContainer.append(carritoContent)

                const eliminoProducto = () => {
                    const encuentroId = carrito.find((elemento) => elemento.id)
                    carrito = carrito.filter((carritoId) => {
                        return carritoId !== encuentroId

                    })
                    carritoContador()
                    salvoLocal()
                    //muestroCarrito()
                    ocultoCarrito()

                }

                let restarProducto = carritoContent.querySelector(".resto")
                restarProducto.addEventListener("click", () => {
                    if (producto.cantidad !== 1) {
                        producto.cantidad--
                    }

                    salvoLocal()
                    muestroCarrito()
                })

                let sumarProducto = carritoContent.querySelector(".sumo")
                sumarProducto.addEventListener("click", () => {
                    producto.cantidad++
                    salvoLocal()
                    muestroCarrito()
                })

                let elimino = document.createElement("button")
                elimino.innerText = "Eliminar Producto"
                elimino.className = "btn btn-danger"
                modalContainer.append(elimino)

                elimino.addEventListener("click", eliminoProducto)

            })
            const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

            const totalCompra = document.createElement("div")
            totalCompra.className = "total-content"
            totalCompra.innerHTML = `Total a Pagar: $${total}`
            modalContainer.append(totalCompra)

            function ocultoCarrito() {
                modalContainer.style.display = "none"
                muestroSweetAlert("El Carrito esta Vacio")
                carritoContador = []
                salvoLocal()
            }

        })

    }
    verCarrito.addEventListener("click", muestroCarrito)

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
