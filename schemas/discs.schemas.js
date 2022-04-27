const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(5).max(50);
const artist  = Joi.string().min(5).max(30);
const genre  = Joi.string().min(4).max(20);
const release_year = Joi.number().min(4);
const label = Joi.string().min(5).max(20);
const price = Joi.number();
const cover = Joi.string().uri();
const url = Joi.string().min(20);;


const createDiscsSchema = Joi.object({
  name: name.required(),
  artist: artist.required(),
  genre: genre.required(),
  release_year: release_year.required(),
  label: label.required(),
  price: price.required(),
  cover: cover.required(),
  url: url.required()
});

const updateDiscsSchema = Joi.object({
  name: name.required(),
  artist: artist.required(),
  genre: genre.required(),
  release_year: release_year.required(),
  label: label.required(),
  price: price.required(),
  url: url.required()
});


module.exports = {
  createDiscsSchema,
  updateDiscsSchema
}