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
            }
        }

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
