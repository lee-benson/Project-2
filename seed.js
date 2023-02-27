import 'dotenv/config'
import mongoose from 'mongoose'
import Judo from './judoka/model.js'
import User from './users/userModel.js'
import judoTechniques from './judoka/judo.json' assert {type: 'json'}
import userData from './users/userData.json' assert {type: 'json'}

// mongoose.connect('mongodb://localhost/test')
// @ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await Judo.deleteMany()
await User.deleteMany()
await Judo.insertMany(judoTechniques)
await User.insertMany(userData)
await mongoose.disconnect()


