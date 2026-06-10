const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  length: {
    type: String,
    required: true,
    trim: true,
  },
  start: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      },
      message: "Start date must be in YYYY-MM-DD format.",
    },
  },
  resort: {
    type: String,
    required: true,
    trim: true,
  },
  perPerson: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
