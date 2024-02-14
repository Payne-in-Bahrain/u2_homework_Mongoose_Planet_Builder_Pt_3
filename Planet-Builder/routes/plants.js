var express = require('express')
var router = express.Router()
const plantCtrl = require('../controllers/planets/plantCtrl')

/* POST /planets */
// router.post('/', plantCtrl.addNewPlant)

/* GET planets/:id/plants */
router.get('/', plantCtrl.index)

/* POST planets/:id/plants */
router.post('/planets/:id/plants', plantCtrl.addNewPlant)

module.exports = router
