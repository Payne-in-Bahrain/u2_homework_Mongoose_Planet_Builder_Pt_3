const Explorer = require('../models/explorer')

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
  res.render('planets/explorersIndex', {
    explorers: allExplorers,
    title: 'Explorers'
  })
}

module.exports = { new: newExplorer, addExplorer, index }
