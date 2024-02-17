var express = require('express')
var router = express.Router()
const planetCtrl = require('../controllers/planets')

/* GET planets listing. */
router.get('/', planetCtrl.index)

router.get('/new', planetCtrl.newPlanet)

/* GET planet details . */
router.get('/:id', planetCtrl.showPlanet)

/* POST associate explorers to planets. */
router.post('/:planetId/explorers', planetCtrl.assocExplorer)

router.post('/', planetCtrl.addNewPlanet)

module.exports = router
