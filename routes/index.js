const express = require("express");
const router = express.Router();

const articleHandler = require("../handler/article");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/search-article", articleHandler.search);

module.exports = router;
