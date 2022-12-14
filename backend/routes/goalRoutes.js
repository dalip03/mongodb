const express = require('express')
const router = express.Router()

const {getGoals , setGoals, updateGoals, deleteGoals} = require('../controller/goalControllers')
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

// router.post('/',setGoals)

// router.put('/:id',updateGoals)

// router.delete('/:id',deleteGoals)


module.exports = router