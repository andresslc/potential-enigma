const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const schema = mongoose.Schema

const productoSchema = schema({
  fecha: Date,
  _id: Number,
  nombre: String,
  estado: String,
  desc: String,
  vlr_unitario: Number,
})

autoIncrement.initialize(mongoose.connection)

productoSchema.plugin(autoIncrement.plugin, {
  model: 'producto',
  field: '_id',
  startAt: 1,
  incrementBy: 1,
})
module.exports = mongoose.model('Producto', productoSchema)