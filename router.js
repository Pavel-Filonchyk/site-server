import Router from 'express'
import ControllerGetPersonalData from './Controllers/ControllerGetPersonalData.js'
import ControllerEditPersonalData from './Controllers/ControllerEditPersonalData.js'
import ControllerAuth from './Controllers/ControllerAuth.js'

const router = new Router()

router.post('/getPersonalData', ControllerGetPersonalData.getPersonalData)
router.put('/editPersonalData', ControllerEditPersonalData.editPersonalData)
router.post('/registration', ControllerAuth.registration)
router.post('/login', ControllerAuth.login)
export default router
