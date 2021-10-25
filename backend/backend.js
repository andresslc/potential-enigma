const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Productos = require('./models/producto')
const Ventas = require('./models/venta')
const Usuarios = require('./models/usuario')
const cors = require('cors')
const app = express()
const config = require('./config')

const port = process.env.PORT || 3003

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(cors(
  config.application.cors.server
));

// USUARIOS

app.get('/usuarios', (req, res) => {
  Usuarios.find({}, (err, usuarios) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!usuarios) return res.status(404).send({ message: `No existen usuarios ${err}` })

    res.status(200).send({usuarios})
  })
})

app.post('/nuevo-usuario', (req, res) => {
  console.log('POST /nuevo-usuario')
  console.log(req.body)
  let usuario = new Usuarios()
  
  usuario._id = req.body.googleId
  usuario.nombre = req.body.givenName
  usuario.apellido = req.body.familyName
  // usuario.fecha = Date()
  usuario.estado = req.body.estado
  usuario.rol = req.body.rol

  usuario.save((err, usuarioGuardado) => {
    console.log('error:', err)
    console.log('usuario:', usuarioGuardado);
    if (err) return res.status(500).send({ message: `Error al guardar el usuario: ${err}` })

    res.status(200).send({usuarioGuardado})
  })
})

app.get('/editar-usuario/:userId', (req, res) => {
  console.log('GET /editar-usuario')
  console.log(req.params.userId)
  Usuarios.findById(req.params.userId, (err, usuario) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
    if (!usuario) return res.status(404).send({ message: `No existe el usuario ${err}` })

    res.status(200).send({usuario})
  })
})

app.put('/editar-usuario/:userId', (req, res) => {
  console.log('PUT /editar-usuario')
  console.log(req.body)

  let estado = req.body.estado
  let rol = req.body.rol

  Usuarios.findOneAndUpdate({ _id: req.body._id }, { estado, rol })
    .then(res.send('Todo bien'))
    .catch(err => res.status(500).send(err))
})

// PRODUCTOS

app.get('/productos', (req, res) => {
  Productos.find({}, (err, productos) => {
    if (err) return res.status(500).send({ message: `Error ${err}` })
    if (!productos) return res.status(404).send({ message: `Not found, error ${err}` })
    
    res.status(200).send({productos})
  })
})

app.post('/nuevo-producto', (req, res) => {
  console.log('POST /nuevo-producto')
  console.log(req.body)

  let producto = new Productos()

  producto.fecha = req.body.fecha
  producto._id = req.body._id
  producto.nombre = req.body.nombre
  producto.desc = req.body.desc
  producto.estado = req.body.estado
  producto.vlr_unitario = req.body.vlr_unitario

  producto.save((err, productoGuardado) => {
    if (err) {
      console.log('error:', err)
      console.log('producto:', productoGuardado);
      return res.status(500).send({ message: `Error al guardar... ${err}` })
    }
    res.status(200).send({productoGuardado})

  })
})

// VENTAS

app.get('/ventas', (req, res) => {
  Ventas.find({}, (err, ventas) => {
    if (err) return res.status(500).send({ message: `Error ${err}` })
    if (!ventas) return res.status(404).send({ message: `Not found, error ${err}` })
    
    res.status(200).send({ventas})
  })
})

app.post('/nueva-venta', (req, res) => {
  console.log('POST /nueva-venta')
  console.log(req.body)

  let venta = new Ventas()

  venta.fecha = req.body.fecha
  venta.id_venta = req.body.id_venta
  venta._id = req.body._id
  venta.estado = req.body.estado
  venta.nombre = req.body.nombre
  venta.cc = req.body.cc
  venta.cantidad = req.body.cantidad
  venta.vendedor = req.body.vendedor
  venta.vlr_unitario = req.body.vlr_unitario
  venta.vlr_total = req.body.vlr_total

  venta.save((err, ventaGuardada) => {
    if (err) {
      console.log('error:', err)
      console.log('venta:', ventaGuardada);
      return res.status(500).send({ message: `Error al guardar... ${err}` })
    }
    res.status(200).send({ventaGuardada})

  })
})

// CONEXIÓN

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbGeorgieForPE:SbSN5S81f5@cluster0.4gron.mongodb.net/dbPE?retryWrites=true&w=majority', (err, res) => {
  if (err) {
    return console.log(`Error: ${err} `);
  }
  console.log('BD is connected...');

  app.listen(port, () => {
    console.log(`API running ${port}`);
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist/'))
}