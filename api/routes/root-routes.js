const express = require('express')

const rootController = require('../controllers/root')



const router = express.Router()

router.post('/post-falseposition',  rootController.postBisection)

router.get('/get-falseposition', rootController.getBisection)

module.exports = router