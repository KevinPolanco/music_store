const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().trim().min(5).max(50);
const artist  = Joi.string().trim().min(5).max(30);
const genre  = Joi.string().trim().min(4).max(20);
const release_year = Joi.number().integer().min(1948).max(2022);
const label = Joi.string().trim().min(5).max(20);
const price = Joi.number();
const cover = Joi.string().trim().uri();
const url = Joi.string().trim().alphanum().min(22).max(22);


const createDiscsSchema = Joi.object({
  name: name.required(),
  artist: artist.required(),
  genre: genre.required(),
  release_year: release_year.required(),
  label: label.required(),
  price: price.required(),
  url: url.required(),
  cover: cover.required(),
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