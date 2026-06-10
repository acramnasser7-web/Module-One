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

module.exports = {
  tripsList,
  tripsFindCode
};
