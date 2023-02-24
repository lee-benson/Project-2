import express from 'express'
import * as controllers from './controller.js'

const router = express.Router()

router.get('/', controllers.getJudo)
router.get('/:belt', controllers.getBelt)
router.get('/type/:type', controllers.getType)
router.get('/name/:name', controllers.getName)

export default router

