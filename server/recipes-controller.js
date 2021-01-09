const Recipe = require('../model/recipes-model.js')

const createRecipes = (req, res) => {
    const body = req.body
    console.log(body, 'creating')
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe',
        })
    }

    const recipe = new Recipe(body)

    if (!recipe) {
        return res.status(400).json({ success: false, error: err })
    }

    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: recipe._id,
                message: 'recipe created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'recipe not created!',
            })
        })
}

const updateRecipes = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Recipe not found!',
            })
        }
        recipe.name = body.name
        recipe.filling = body.filling
        recipe.dough = body.dough
        recipe.directions = body.directions
        recipe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: recipe._id,
                    message: 'Recipe updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Recipe not updated!',
                })
            })
    })
}

const deleteRecipes = async (req, res) => {
    await Recipe.findOneAndDelete({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Recipe) {
            return res
                .status(404)
                .json({ success: false, error: `Recipe not found` })
        }

        return res.status(200).json({ success: true, data: recipe })
    }).catch(err => console.log(err))
}

const getRecipesById = async (req, res) => {
    await Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, error: `Recipe not found` })
        }
        return res.status(200).json({ success: true, data: recipe })
    }).catch(err => console.log(err))
}

const getRecipes = async (req, res) => {
    await Recipe.find({}, (err, recipes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!recipes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Recipe not found` })
        }
        return res.status(200).json({ success: true, data: recipes })
    }).catch(err => console.log(err))
}

module.exports = {
    createRecipes,
    updateRecipes,
    deleteRecipes,
    getRecipes,
    getRecipesById,
}