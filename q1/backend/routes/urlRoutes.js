const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");
const {
  createShortUrl,
  redirectTo,
  getStats,
} = require("../controllers/urlController");

router.use(logger);

router.post("/", createShortUrl);
router.get("/:shortcode", getStats);
router.get("/:shortcode/redirect", redirectTo);

module.exports = router;
