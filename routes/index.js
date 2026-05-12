var express = require("express");
var path = require("path");
var router = express.Router();

function travlrPage(page) {
  return function (req, res, next) {
    res.sendFile(
      path.join(__dirname, "..", "public", "images", "travlr", page),
    );
  };
}

/* GET home page. */
router.get("/", travlrPage("index.html"));
router.get("/about", travlrPage("about.html"));
router.get("/contact", travlrPage("contact.html"));
router.get("/meals", travlrPage("meals.html"));
router.get("/news", travlrPage("news.html"));
router.get("/rooms", travlrPage("rooms.html"));
router.get("/travel", travlrPage("travel.html"));

module.exports = router;
