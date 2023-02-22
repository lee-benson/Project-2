import mongoose from 'mongoose'

const judoSchema = new mongoose.Schema({
  name: String,
  belt: String,
  type: String
})

export default mongoose.model('Judo', judoSchema)

