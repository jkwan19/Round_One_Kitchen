const express = require('express');

const Controller = require('./recipes-controller');

const router = express.Router()

router.post('/recipes', Controller.createRecipes)
router.put('/recipes/:id', Controller.updateRecipes)
router.delete('/recipes/:id', Controller.deleteRecipes)
router.get('/recipes/:id', Controller.getRecipesById)
router.get('/recipes', Controller.getRecipes)

module.exports = router