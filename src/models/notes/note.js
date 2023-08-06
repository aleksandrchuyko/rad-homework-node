const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongoSaveError } = require('../../utils');

const categoriesList = ['Task', 'Idea', 'Random Thought'];

const noteSchema = new Schema(
  {
    category: {
      type: String,
      enum: categoriesList,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    dates: {
      type: [String],
      default: [],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

noteSchema.post('save', handleMongoSaveError);

const Note = model('note', noteSchema);

const addSchema = Joi.object({
  category: Joi.string().valid(...categoriesList).required(),
  content: Joi.string().required(),
  active: Joi.boolean(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Note,
  schemas,
};
