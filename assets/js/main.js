// alert()
const nombreProducto = 0
const valorProducto = 1

class Prodcuto{
    constructor(nombre,precio,cantidadDisponible){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidadDisponible = cantidadDisponible
    }

    venderPrducto(){
        if (this.cantidadDisponible >=1){
            this.cantidadDisponible -= 1
            return [this.nombre,this.precio]
        }
    }

    devolverProducto(){
        this.cantidadDisponible += 1
    }

}

class Carrito{
    constructor(){
        this.elementos = []
    }
    agregarProducto(prodcuto){
        this.elementos.push(prodcuto)
        
    }
    eliminarUnProducto(prodcuto){
        // this.elementos.forEach((producto, index)=> {
        //     if (producto[nombreProducto] == prodcuto){
        //         this.elementos.splice(index,1)
        //     }
        // })

        for (let i = 0; i< this.elementos.length; i++){
            if ((this.elementos[i][nombreProducto]) == prodcuto){
                this.elementos.splice(i,1)
                return true
            }
        }
        return false

    }
    vaciarCarrito(){
        let total = 0
        this.elementos = []
    }
    
    valorTotal(){
        let valor = 0
        for (let i = 0; i < this.elementos.length; i++){
            valor += this.elementos[i][valorProducto]
        }
        return valor
    }   
}

let RemeraNegra = new Prodcuto('RemeraNegra', 9000, 0)
let RemeraBlanca = new Prodcuto('RemeraBlanca', 6000, 3)
let RemeraRoja = new Prodcuto('RemeraRoja', 4000, 2)

let carrito = new Carrito()

function consolaVenderProducto(producto){
    if (producto == 'RemeraNegra'){
        unidad = RemeraNegra.venderPrducto()
        if (unidad != undefined){
            carrito.agregarProducto(unidad)
            console.log('Agregado exitosamente')
        }
        else{
            console.log("producto sin stock")
        }
    }
    else if (producto == 'RemeraBlanca'){
        unidad = RemeraBlanca.venderPrducto()
        if (unidad != undefined){
            carrito.agregarProducto(unidad)
            console.log('Agregado exitosamente')
        }
        else{
            console.log("producto sin stock")
        }
    }
    else if (producto == 'RemeraRoja'){
        unidad = RemeraRoja.venderPrducto()
        if (unidad != undefined){
            carrito.agregarProducto(unidad)
            console.log('Agregado exitosamente')
            }
        else{
            console.log("producto sin stock")
        }
    }
    else{
        console.log('producto invalido')
    }
}
function consolaEliminarProducto(producto){
    if (producto == 'RemeraNegra'){
        elimineProducto = carrito.eliminarUnProducto(producto)
        if (elimineProducto){
            RemeraNegra.devolverProducto()
            console.log('Eliminado Exitosamente')
        }
        else{
            console.log("El producto no se encuentra en el carrito")
        }
    }
    else if (producto == 'RemeraBlanca'){
        elimineProducto = carrito.eliminarUnProducto(producto)
        if (elimineProducto){
            RemeraBlanca.devolverProducto()
            console.log('Eliminado Exitosamente')
        }
        else{
            console.log("El producto no se encuentra en el carrito")
        }
    }
    else if (producto == 'RemeraRoja'){
        elimineProducto = carrito.eliminarUnProducto(producto)
        if (elimineProducto){
            RemeraRoja.devolverProducto()
            console.log('Eliminado Exitosamente')
        }
        else{
            console.log("El producto no se encuentra en el carrito")
        }
    }
    else{
        console.log('producto invalido')
    }
}

function escribir(){
    console.log('Bienvenidos a MoonShop, nuestros prodcutos en stock son: RemeraNegra, RemeraBlanca, RemeraRoja')
    console.log('escribe "agregarProducto nombreProducto" para agregar el producto al carrito')
    console.log('escribe "eliminarProducto nombreProducto" para eliminar el producto al carrito')
    console.log('escribe "vaciarCarrito" para dejar el carrito en cero')
    console.log('escribe "finalizarCompra" para finalizar la compra y llevarte nuestros prodcutos de ultima moda')
    console.log('escribe "exit" para irte de nuestra tienda sin comprar')
}


function main(){
    let termine = false
    while (! termine){
        let ingresado = prompt("Bienvenidos a MoonShop, nuestros prodcutos en stock son: RemeraNegra, RemeraBlanca, RemeraRoj escribe agregarProducto nombreProducto para agregar el producto al carrito escribe eliminarProducto nombreProducto para eliminar el producto al carrito")
        arreglo = ingresado.split(" ")
        comando = arreglo[0]
        if (comando == 'agregarProducto'){
            if (arreglo.length != 2){
                console.log('falta agregar producto para sumar al carrito')
            }
            else {
                consolaVenderProducto(arreglo[1])
            }
        }
        else if (comando == 'eliminarProducto'){
            if (arreglo.length != 2){
                console.log('falta agregar producto a eliminar')
            }
            else {
                consolaEliminarProducto(arreglo[1])
            }
        }
        else if (comando == 'vaciarCarrito'){
            carrito.vaciarCarrito()
            console.log('carrito vaciado con exito')
        }
        else if (comando == 'finalizarCompra'){
            valorAAbonar = carrito.valorTotal()
            console.log('Su total a abonar es $' + valorAAbonar)
            console.log('Muchas gracias por su compra')
            termine = true
        }
        else if (comando == 'exit'){
            termine = true
            console.log('Gracias por su visita')
        }
        else{
            console.log('comando incorrecto')
        }
        
    
    }
}

setTimeout(() => {
    escribir()
}, 2000);

setTimeout(() => {
    main()
}, 3000);
