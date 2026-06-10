const trips = require("../data/trips.json");
const Trip = require("../models/trip");

const home = (req, res) => {
  res.render("index", {
    title: "Travlr Getaways",
    heading: "Welcome to Travlr Getaways",
    description: "Book your dream vacations today.",
  });
};

const about = (req, res) => {
  res.render("about", {
    title: "About Us",
  });
};

const contact = (req, res) => {
  res.render("contact", {
    title: "Contact Us",
  });
};

const meals = (req, res) => {
  res.render("meals", {
    title: "Meals",
  });
};

const news = (req, res) => {
  res.render("news", {
    title: "News",
  });
};

const rooms = (req, res) => {
  res.render("rooms", {
    title: "Rooms",
  });
};

const travel = async (req, res) => {
  try {
    const tripsFromDb = await Trip.find().lean();
    res.render("travel", {
      title: "Travel Packages",
      trips: tripsFromDb.length > 0 ? tripsFromDb : trips,
    });
  } catch (error) {
    console.error("Error loading trips from MongoDB:", error);
    res.render("travel", {
      title: "Travel Packages",
      trips,
      error: "Unable to load live trip data at this time.",
    });
  }
};

module.exports = {
  home,
  about,
  contact,
  meals,
  news,
  rooms,
  travel,
};
