const express = require("express");
const router = express.Router();

const articleHandler = require("../handler/article");
const bookHandler = require("../handler/book");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Software Seni Technical Test" });
});

router.get("/search-article", articleHandler.search);
router.get("/book/hardcover-fiction", bookHandler.hardcoverFiction);
router.get("/book/ebook-fiction", bookHandler.ebookFiction);

module.exports = router;
