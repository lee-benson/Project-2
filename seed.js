import mongoose from 'mongoose'
import judoTechniques from './judoka/judo.json' assert {type: 'json'}
import Judo from './judoka/model.js'

mongoose.connect('mongodb://localhost/test')
await Judo.deleteMany()
await Judo.insertMany(judoTechniques)
await mongoose.disconnect()


