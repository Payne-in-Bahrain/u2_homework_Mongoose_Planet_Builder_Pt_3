var express = require('express')
var router = express.Router()
const planetCtrl = require('../controllers/planets/planetCtrl')

/* GET planets listing. */
router.get('/', planetCtrl.index)

router.get('/new', planetCtrl.newPlanet)

/* GET planet details . */
router.get('/:id', planetCtrl.showPlanet)

router.post('/', planetCtrl.addNewPlanet)

module.exports = router
