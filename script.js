
let boton = document.getElementById("button")

/*function mostrarAlert() {
  alert('queda poco stock')
}*/

let productos = [
  { id: 002, nombre: "Patek Philippe", categoria: "A1", precio: 78000, stock: 6, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/231989/PatekPhilippe-Nautilus-71181200A-001-231989-6-221124-142341.jpg;quality=90;h=425" },
  { id: 005, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 001, nombre: "IWC", categoria: "C1", precio: 30000, stock: 8, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/226794/IWC-BigPilots-IW502708-226794-3-220817-145001.jpg;quality=90;h=425" },
  { id: 0031, nombre: "AP", categoria: "A1", precio: 40000, stock: 10, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/232881/AudemarsPiguet-RoyalOak-15400ST.OO.1220ST.04-232881-1-221128-094029.jpg;quality=90;h=425" },
  { id: 0010, nombre: "Patek Philippe", categoria: "A1", precio: 78000, stock: 6, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/231989/PatekPhilippe-Nautilus-71181200A-001-231989-6-221124-142341.jpg;quality=90;h=425" },
  { id: 0015, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 0012, nombre: "IWC", categoria: "C1", precio: 30000, stock: 8, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/226794/IWC-BigPilots-IW502708-226794-3-220817-145001.jpg;quality=90;h=425" },
  { id: 0011, nombre: "AP", categoria: "A1", precio: 40000, stock: 10, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/232881/AudemarsPiguet-RoyalOak-15400ST.OO.1220ST.04-232881-1-221128-094029.jpg;quality=90;h=425" },
  { id: 0016, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 0017, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 003, nombre: "Patek Philippe", categoria: "A1", precio: 78000, stock: 6, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/231989/PatekPhilippe-Nautilus-71181200A-001-231989-6-221124-142341.jpg;quality=90;h=425" },
  { id: 004, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 007, nombre: "IWC", categoria: "C1", precio: 30000, stock: 8, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/226794/IWC-BigPilots-IW502708-226794-3-220817-145001.jpg;quality=90;h=425" },
  { id: 006, nombre: "AP", categoria: "A1", precio: 40000, stock: 10, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/232881/AudemarsPiguet-RoyalOak-15400ST.OO.1220ST.04-232881-1-221128-094029.jpg;quality=90;h=425" },
  { id: 0020, nombre: "Patek Philippe", categoria: "A1", precio: 78000, stock: 6, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/231989/PatekPhilippe-Nautilus-71181200A-001-231989-6-221124-142341.jpg;quality=90;h=425" },
  { id: 0021, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 0025, nombre: "IWC", categoria: "C1", precio: 30000, stock: 8, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/226794/IWC-BigPilots-IW502708-226794-3-220817-145001.jpg;quality=90;h=425" },
  { id: 0026, nombre: "AP", categoria: "A1", precio: 40000, stock: 10, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/232881/AudemarsPiguet-RoyalOak-15400ST.OO.1220ST.04-232881-1-221128-094029.jpg;quality=90;h=425" },
  { id: 0022, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" },
  { id: 0030, nombre: "Omega", categoria: "B1", precio: 6000, stock: 4, imgUrl: "https://images.watchfinder.co.uk/imgv2/stock/212195/Omega-OlympicSeamaster-522.30.42.20.04.001-212195-2-220131-131308.jpg;quality=90;h=425" }
]
//let carrito = []
let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []

let contenedorProductos = document.getElementById("contenedorProductos")
let contenedorCarrito = document.getElementById("contenedorCarrito")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
buscar.onclick = filtrarProducto

renderizarProductos(productos)

function filtrarProducto(e) {
  console.log("E", e.target.id)
  let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
  console.log(productosFiltrados)
  renderizarProductos(productosFiltrados)
}

//Renderizo los productos
function renderizarProductos(arrayDeProductos) {
  contenedorProductos.innerHTML = ""
  arrayDeProductos.forEach(producto => {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.classList.add("producto")
    tarjetaProducto.id = `tarjeta${producto.id}`

    tarjetaProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p class="precioProducto">$${producto.precio}</p>
      <img class="imgProductos" src=${producto.imgUrl} />
      <p class="texto-descripcion">Reloj de lujo, estilo elegante y deportivo par uso diario</p>
      <button class="btn btn-primary" id=${producto.id}>Agregar al carrito</button>
    `

    contenedorProductos.append(tarjetaProducto)

    let boton = document.getElementById(producto.id)
    boton.onclick = agregarAlCarrito
  })
}
//agrego al carrito
function agregarAlCarrito(e) {
  let id = e.target.id
  let productoBuscado = productos.find(producto => producto.id == id)
  let productoEnCarrito = carrito.find(producto => producto.id == productoBuscado.id)

  Toastify({
    text: "Producto agregado al carrito",
    duration: 1000,
    gravity: "bottom", 
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }, 
  }).showToast();

  if (productoEnCarrito) {
    let posicionProducto = carrito.findIndex(producto => producto == productoEnCarrito)
    carrito[posicionProducto].unidades++
    carrito[posicionProducto].subtotal = carrito[posicionProducto].precio * carrito[posicionProducto].unidades
  } else {
    // tiene todas las propiedades de antes + unidades y subtotal
    productoBuscado.unidades = 1
    productoBuscado.subtotal = productoBuscado.precio
    carrito.push(productoBuscado)
  }

  renderizoCarrito(carrito)
}

localStorage.setItem("carrito", JSON.stringify(carrito))

renderizoCarrito(carrito)

//renderizo el carrito
function renderizoCarrito(productosEnCarrito) {
  contenedorCarrito.innerText = ""
  productosEnCarrito.forEach(producto => {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.classList.add("itemCarrito")
    tarjetaProducto.innerHTML += `
      <h3>Marca: ${producto.nombre}</h3>
      <p>Cantidad: ${producto.unidades}</p>
      <p class="precioCarrito">Precio $${producto.subtotal}</p>
      <p>Quedan en Stock ${producto.stock} Unidades</p>
      <img class="imgProductosCarrito" src=${producto.imgUrl} /img>
      <hr>
    `
  //unidades de stock < 10 renderizo quedan pocas unidades   
    if (producto.stock < 10) {
      tarjetaProducto.classList.add("pocoStock")
      let pocasUnidades = document.createElement('h5')
      pocasUnidades.innerText = "Quedan pocas unidades"
      tarjetaProducto.appendChild(pocasUnidades)
    
    }
    
    contenedorCarrito.appendChild(tarjetaProducto)
  })

  productosEnCarrito.forEach(producto => {
    contenedorCarrito.innerHTML += `
     <button class="btn btn-danger" id="finalizoCompra">Finalizar Compra</button>
    `
    let comprar = document.getElementById("finalizoCompra")
    comprar.addEventListener('click', terminoCompra)
  })
  
}
function terminoCompra(){
  localStorage.removeItem("carrito")
  carrito = []
  renderizoCarrito(carrito)
  
  muestroSweetAlert('Gracias por su compra',false)
}    

let cart = document.getElementById("cart")
cart.onclick = filtrarPorCategoria

//filtro por categoria
function filtrarPorCategoria(e) {
  let productosFiltrados = productos.filter(producto => producto.categoria === e.target.id)
  renderizarProductos(productosFiltrados)
}
 
function muestroSweetAlert(titulo, texto, icono) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
  })
}
 

