const Router = require('express')
const UserController = require('../controller/user.controller')

const router = new Router()

router.post('/user', UserController.createUser)
router.get('/users', UserController.getUsers)
router.get('/user/:id', UserController.getOneUser)
router.put('/user', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)


module.exports = router