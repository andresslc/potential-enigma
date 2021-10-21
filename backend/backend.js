const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Ventas = require('./models/venta')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3003

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

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

mongoose.connect('mongodb+srv://dbGeorgieForPE:SbSN5S81f5@cluster0.4gron.mongodb.net/dbPE?retryWrites=true&w=majority', (err, res) => {
  if (err) {
    return console.log(`Error: ${err} `);
  }
  console.log('BD is connected...');

  app.listen(port, () => {
    console.log(`API running ${port}`);
  })
})