const express = require('express')
const router = express.Router()
const {getAllUsers,getUser,editUser,deleteUser,addUser} = require('../Controller/user')
router.get('/:id',getUser)
router.route('/').post(addUser).
patch(editUser)
.delete(deleteUser).
get(getAllUsers)
module.exports = router