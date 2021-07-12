const express = require("express");
const Producto = require("./Producto.js");


const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const prod = new Producto()
app.get("/api/productos/listar/",( req, res ) => {
    const data = prod.listar()
        res.json( data.length !== 0 ? {productos:data} : {error: 'no hay productos cargados'})        
})

app.get("/api/productos/listar/:id",( req, res ) => {
    const result = prod.buscarPorId( parseInt(req.params.id))
    res.json(result ? {producto: result} : {error: 'producto no encontrado'})
})
// ejemplo de body de agregar producto
// {
//     "title": "(nombre del pgdsgdsroducto)",
//     "price": 10000,
//     "thumbnail": "url"
// }

app.post("/api/productos/guardar/",( req, res ) => {
    producto = req.body
    const guardado = prod.guardar(producto)
    console.log(guardado)
    res.json({
            message:"save ok!",
            producto:guardado
    })
})

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en en http://localhost:${PORT}`);
  });
  server.on("error", (error) => console.log(`error en el servidor ${error}`));