const Explorer = require('../models/explorer')
const planetsCtrl = require('./planets')

const newExplorer = (req, res) => {
  res.render('planets/newExplorer', { title: 'New Explorer' })
}

const addExplorer = async (req, res) => {
  const explorer = new Explorer(req.body)
  await explorer.save()
  res.redirect('explorers')
}

const index = async (req, res) => {
  const allExplorers = await Explorer.find({})

  // console.log('all planets are: ', allPlanets)
  res.render('planets/explorersIndex', {
    explorers: allExplorers,
    title: 'Explorers'
  })
}

const show = async (req, res) => {
  const explorer = await Explorer.findById(req.params.id)
  let allPlanets = await planetsCtrl.getAllPlanets()
  res.render('planets/associatePlanets', {
    explorer: explorer,
    planets: allPlanets,
    title: 'Select Planets'
  })
}

module.exports = { new: newExplorer, addExplorer, index, show }
