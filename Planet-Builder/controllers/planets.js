const planet = require('../models/planet')
const Planet = require('../models/planet')

const index = async (req, res) => {
  const p1 = await Planet.find({})

  res.render('planet/index', { planets: p1, title: 'All Planets' })
  // console.log('Planets are :', p1s)
}

const showPlanet = async (req, res) => {
  const id = req.params.id
  const planet = await Planet.findById(id)
  res.render('planet/show', {
    p: planet,
    title: 'Planet Details'
  })
}

const newPlanet = (req, res) => {
  res.render('planet/newPlanet', { title: 'New Planet' })
}

const addNewPlanet = async (req, res) => {
  try {
    console.log('req.body.plants is :', req.body.plants)
    const reqPlantsValue = req.body.plants
    // console.log('Object.create() result is :', Object.create())
    const newPlanetValue = Object.create({})
    const newPlanetValueAfterAddingPlants = Object.create({})
    // console.log('req.body is :', req.body)
    newPlanetValue.name = req.body.name
    // console.log('req.body.name is :', req.body.name)
    // console.log('1-newPlanetValue is :', newPlanetValue)
    newPlanetValue.climate = req.body.climate
    newPlanetValue.population = req.body.population
    newPlanetValue.plants = req.body.plants
    // console.log('2-newPlanetValue is :', newPlanetValue)
    newPlanetValue.plants = JSON.parse(reqPlantsValue)

    newPlanetValueAfterAddingPlants.name = newPlanetValue.name
    newPlanetValueAfterAddingPlants.climate = newPlanetValue.climate
    newPlanetValueAfterAddingPlants.population = newPlanetValue.population

    const plants = newPlanetValue.plants.map((plantObj) => {
      if (plantObj.isPoison === 'true') {
        return {
          name: plantObj.name,
          color: plantObj.color,
          poisonous: true
        }
      } else {
        return {
          name: plantObj.name,
          color: plantObj.color,
          poisonous: false
        }
      }
    })

    // console.log('plants arr is :', plants)
    newPlanetValueAfterAddingPlants.plants = plants
    // console.log('new planet is :', newPlanetValue)
    const newPlanet = new Planet(newPlanetValueAfterAddingPlants)
    await newPlanet.save()
    res.redirect('/planets')
  } catch (error) {
    if (error.name === 'ValidationError') {
      // res.status(500).send('Something went wrong')
      let errors = {}

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })

      return res.status(400).send(errors)
    }
    res.status(500).send('Something went wrong')
  }
}

module.exports = { index, newPlanet, addNewPlanet, showPlanet }
