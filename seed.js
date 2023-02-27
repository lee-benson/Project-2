import 'dotenv/config'
import mongoose from 'mongoose'
import judoTechniques from './judoka/judo.json' assert {type: 'json'}
import Judo from './judoka/model.js'
import user from './users/userModel.js'
import userData from './users/userData.json' assert {type: 'json'}

// mongoose.connect('mongodb://localhost/test')
// @ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await Judo.deleteMany()
await Judo.insertMany(judoTechniques)
await user.deleteMany()
await user.insertMany(userData)
await mongoose.disconnect()


