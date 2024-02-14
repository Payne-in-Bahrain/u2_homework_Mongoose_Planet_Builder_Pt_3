const { model } = require('mongoose')
const Planet = require('../../models/planet')

const index = (req, res) => {
  res.redirect('/planets')
}

const indexOld = async (req, res) => {
  const id = req.params.id
  const planet = await Planet.findById(id)
  res.render('planet/show', {
    p: planet,
    title: 'Planet Details'
  })
}

const addNewPlant = async (req, res) => {
  const id = req.params.id
  const planet = await Planet.findById(id)

  const newPlant = {}
  newPlant.name = req.body.name
  newPlant.color = req.body.color
  newPlant.poisonous = req.body.isPoison === 'on' ? true : false
  console.log('id=', id, ' adding', newPlant, 'to planet :', planet)
  planet.plants.push(newPlant)
  planet.save()
  res.redirect('/')
}

module.exports = { addNewPlant, index }
