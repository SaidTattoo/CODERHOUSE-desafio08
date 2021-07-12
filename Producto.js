const productos = require('./productos')
class Producto {
    constructor(){

    }
    guardar(producto){
        producto.id = productos.length +1
        productos.push(producto)
        return productos
    }
    listar(){
        return productos
    }
    buscarPorId(id){
        const producto = productos.find((producto) =>  producto.id === id)
        return producto
    }
}
module.exports = Producto;