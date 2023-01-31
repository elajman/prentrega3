
const shopContent = document.getElementById("shopContenido")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadEnCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

//Renderizo carrito

productos.forEach((product) => {
    let content = document.createElement("div")
    content.className = "card"
    content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img src=${product.imgUrl}>
        <p class="precio">USD${product.precio}</p>
        <p>Quedan ${product.stock} Unidades</p>
        
    `
    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
    //sumo cantidades en carrito
        const seRepite = carrito.some((repiteProducto) => repiteProducto.id === product.id)
        if(seRepite){
            carrito.map((prod) => {
                if(prod.id == product.id) {
                    prod.cantidad++
                }
            })
        } else {
        carrito.push({
            id: product.id,
            imgUrl: product.imgUrl,
            nombre: product.nombre,
            precio: product.precio,
            stock: product.stock,
            cantidad: product.cantidad
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

let buscador = document.getElementById("buscador")
let cart = document.getElementById("buscar")


/**
 * agragear filtrar por categoria
 */

  const salvoLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

