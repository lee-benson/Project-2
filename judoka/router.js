import express from 'express'
import * as controllers from './controller.js'
import * as userControllers from '../users/userControllers.js'

const router = express.Router()

// Judo techniques
router.get('/', controllers.getJudo)
router.get('/users', userControllers.getUsers)
router.get('/:belt', controllers.getBelt)
router.get('/type/:type', controllers.getType)
router.get('/name/:name', controllers.getName)
router.post('/', controllers.createJudo)
router.patch('/:name', controllers.updateJudo)
router.delete('/:name', controllers.deleteJudo)
router.delete('/user/:name', userControllers.deleteUser)


// Users
router.post('/register', userControllers.createUser)
router.post('/login', userControllers.checkUser)
export default router


