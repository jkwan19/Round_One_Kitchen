const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipes = new Schema(
  {
    name: { type: String, required: true },
    filling: { type: [String], required: true },
    dough: { type: [String], required: true },
    directions: {type: [String], required: true}
  },
  { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipes)