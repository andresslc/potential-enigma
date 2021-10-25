const mongoose = require('mongoose')

const schema = mongoose.Schema

const usuarioSchema = schema({
  fecha: Date,
  _id: Number,
  nombre: String,
  apellido: String,
  estado: String,
  rol: String,
})

module.exports = mongoose.model('Usuario', usuarioSchema)