const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const schema = mongoose.Schema

const ventaSchema = schema({
  fecha: Date,
  id_venta: Number,
  _id: Number,
  estado: String,
  nombre: String,
  cc: Number,
  cantidad: Number,
  vendedor: String,
  vlr_unitario: Number,
  vlr_total: Number,

})

autoIncrement.initialize(mongoose.connection)

ventaSchema.plugin(autoIncrement.plugin, {
  model: 'venta',
  field: '_id',
  startAt: 1,
  incrementBy: 1,
})
module.exports = mongoose.model('Venta', ventaSchema)