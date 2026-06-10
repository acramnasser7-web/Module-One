const db = require("./app_server/models/db");
const Trip = require("./app_server/models/trip");
const tripsData = require("./app_server/data/trips.json");

const seedTrips = async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(tripsData);
    console.log(`Seeded ${tripsData.length} trips into MongoDB.`);
    process.exit(0);
  } catch (error) {
    console.error("Failed to seed trips:", error);
    process.exit(1);
  }
};

db.once("open", seedTrips);
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
