const mongoose = require("mongoose");

const mongoURI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/travlrdb";

mongoose.set("strictQuery", false);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("MongoDB initial connection error:", err);
  });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("MongoDB connected to", mongoURI);
});

module.exports = db;
