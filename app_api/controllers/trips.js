var mongoose = require('mongoose');
var Trip = require('../../app_server/models/trip');

// GET /api/trips  -- returns all trips
var tripsList = async function(req, res) {
  try {
    var trips = await Trip.find({}).exec();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found.' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET /api/trips/:tripCode  -- returns a single trip by code
var tripsFindCode = async function(req, res) {
  try {
    var trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found.' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// POST /api/trips  -- create a new trip
var tripsAddTrip = async function(req, res) {
  try {
    var trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });
    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUT /api/trips/:tripCode  -- update a trip by code
var tripsUpdateTrip = async function(req, res) {
  try {
    var trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }
    ).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found.' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// DELETE /api/trips/:tripCode  -- delete a trip by code
var tripsDeleteTrip = async function(req, res) {
  try {
    var trip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found.' });
    }
    return res.status(200).json({ message: 'Trip deleted successfully.' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
