const express = require('express')
const router = express.Router()
const explorerCtrl = require('../controllers/explorers')

// GET add new explorer
router.get('/new', explorerCtrl.new)

// GET get a list of explorers
router.get('/', explorerCtrl.index)

// POST add new explorer
router.post('/', explorerCtrl.addExplorer)

module.exports = router
