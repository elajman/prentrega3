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
