const Recipes = require('../model/recipes-model.js')

createRecipes = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a recipe',
        })
    }

    const Recipes = new Recipes(body)

    if (!Recipes) {
        return res.status(400).json({ success: false, error: err })
    }

    Recipes
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Recipes._id,
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

updateRecipes = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Recipes.findOne({ _id: req.params.id }, (err, Recipes) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Recipes not found!',
            })
        }
        Recipes.name = body.name
        Recipes.filling = body.filling
        Recipes.dough = body.dough
        Recipes.directions = body.directions
        Recipes
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Recipes._id,
                    message: 'Recipes updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Recipes not updated!',
                })
            })
    })
}

deleteRecipes = async (req, res) => {
    await Recipes.findOneAndDelete({ _id: req.params.id }, (err, Recipes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Recipes) {
            return res
                .status(404)
                .json({ success: false, error: `Recipes not found` })
        }

        return res.status(200).json({ success: true, data: Recipes })
    }).catch(err => console.log(err))
}

getRecipesById = async (req, res) => {
    await Recipes.findOne({ _id: req.params.id }, (err, Recipes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Recipes) {
            return res
                .status(404)
                .json({ success: false, error: `Recipes not found` })
        }
        return res.status(200).json({ success: true, data: Recipes })
    }).catch(err => console.log(err))
}

getRecipes = async (req, res) => {
    await Recipes.find({}, (err, Recipess) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Recipess.length) {
            return res
                .status(404)
                .json({ success: false, error: `Recipes not found` })
        }
        return res.status(200).json({ success: true, data: Recipes })
    }).catch(err => console.log(err))
}

module.exports = {
    createRecipes,
    updateRecipes,
    deleteRecipes,
    getRecipes,
    getRecipesById,
}