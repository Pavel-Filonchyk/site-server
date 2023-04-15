import Router from 'express'
import ControllerPostCustomers from './Controllers/ControllerPostCustomers.js'
import ControllerGetCustomers from './Controllers/ControllerGetCustomers.js'
import ControllerAddCustomer from './Controllers/ControllerAddCustomer.js'
import ControllerDeleteCustomer from './Controllers/ControllerDeleteCustomer.js'
import ControllerEditCustomer from './Controllers/ControllerEditCustomer.js'

const router = new Router()
router.get('/list', ControllerGetCustomers.getAll)
router.post('/postCustomer', ControllerAddCustomer.postCustomer)
router.post('/create', ControllerPostCustomers.postAll)
router.post('/delete', ControllerDeleteCustomer.deleteCustomer)
router.put('/customer', ControllerEditCustomer.editCustomer)

export default router
