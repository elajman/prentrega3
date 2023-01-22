
let boton = document.getElementById("button")
//boton.addEventListener("click", () => alert('hizo click'))//funcion anonima para que no se ejeculte en el momento
//boton.addEventListener("click", mostrarAlert)//funcion anonima para que no se ejeculte en el momento
function mostrarAlert() {
  alert('queda poco stock')
}
//boton.onclick = mostrarAlert()//idem al de arrib
//el objeto literal productos llega de la DB.
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
let carrito = []

let contenedorProductos = document.getElementById("contenedorProductos")
let contenedorCarrito = document.getElementById("contenedorCarrito")
let buscador = document.getElementById("buscador")
let buscar = document.getElementById("buscar")
buscar.onclick = filtrar

renderizarProductos(productos)

function filtrar(e) {
  console.log("E", e.target.id)
  let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
  console.log(productosFiltrados)
  renderizarProductos(productosFiltrados)
}


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
      <button class="btn btn-primary" id=${producto.id}>Agregar al carrito</button>
    `
    if (producto.stock < 10) {
      tarjetaProducto.classList.add("pocoStock")
      let pocasUnidades = document.createElement('p')
      pocasUnidades.innerText = "Quedan pocas unidades"
      tarjetaProducto.appendChild(pocasUnidades)
    }

    contenedorProductos.append(tarjetaProducto)

    let boton = document.getElementById(producto.id)
    boton.onclick = agregarAlCarrito
  })
}

function agregarAlCarrito(e) {
  let id = e.target.id
  let productoBuscado = productos.find(producto => producto.id == id)
  let productoEnCarrito = carrito.find(producto => producto.id == productoBuscado.id)

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

  renderizarCarrito(carrito)
}

function renderizarCarrito(productosEnCarrito) {
  contenedorCarrito.innerText = ""
  productosEnCarrito.forEach(producto => {
    let tarjetaProducto = document.createElement("div")
    tarjetaProducto.classList.add("itemCarrito")
    tarjetaProducto.innerHTML += `
      <h3>Marca: ${producto.nombre}</h3>
      <p>Cantidad: ${producto.unidades}</p>
      <p class="precioCarrito">Precio $${producto.subtotal}</p>
      <img class="imgProductosCarrito" src=${producto.imgUrl} /img>
      <hr>
    `
    contenedorCarrito.appendChild(tarjetaProducto)
  })
}

let cart = document.getElementById("cart")
cart.onclick = filtrarPorCategoria

function filtrarPorCategoria(e) {
  let productosFiltrados = productos.filter(producto => producto.categoria === e.target.id)
  renderizarProductos(productosFiltrados)
}

/*const categoryA = productos.filter(product => product.categoria === "A1")
console.log(categoryA)

const categories = ['A1', 'B1']
const filteredProducts = productos.filter(product => categories.includes(product.categoria))
console.log(filteredProducts)

const form = document.querySelector("form")
const select = document.querySelector("#category-select")
const productList = document.querySelector("#product-list")


form.addEventListener("submit", event => {
  event.preventDefault()
  const selectedCategory = select.value
  let filteredCategoria = productos
  if (selectedCategory !== "all") {
    filteredCategoria = productos.filter(product => product.categoria === selectedCategory)
  }
  productos.innerHTML = ""
  filteredCategoria.forEach(product => {
    const li = document.createElement("li")
    li.textContent = product.nombre;
    productList.appendChild(li)
  })
})*/
