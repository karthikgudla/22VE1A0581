const Url = require("../models/url");
const { nanoid } = require("nanoid");

// POST /shorturls
exports.createShortUrl = async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;
  const code = shortcode || nanoid(6);

  if (await Url.findOne({ shortcode: code })) {
    return res.status(400).json({ message: "Shortcode already exists" });
  }

  const expiry = new Date(Date.now() + validity * 60 * 1000);
  const entry = new Url({ originalUrl: url, shortcode: code, expiry });

  await entry.save();
  res.status(201).json({
    shortLink: `http://localhost:8000/${code}`,
    expiry: entry.expiry,
  });
};

// GET /:shortcode → redirect
exports.redirectTo = async (req, res) => {
  const { shortcode } = req.params;
  const entry = await Url.findOne({ shortcode });

  if (!entry) return res.status(404).json({ message: "Shortcode not found" });
  if (new Date() > entry.expiry)
    return res.status(410).json({ message: "Expired" });

  entry.clicks.push({
    referrer: req.headers.referer || "unknown",
    location: "unknown",
  });
  await entry.save();

  return res.redirect(entry.originalUrl);
};

// GET /shorturls/:shortcode → stats
exports.getStats = async (req, res) => {
  const { shortcode } = req.params;
  const entry = await Url.findOne({ shortcode });

  if (!entry) return res.status(404).json({ message: "Shortcode not found" });

  res.json({
    originalUrl: entry.originalUrl,
    clicks: entry.clicks.length,
    createdAt: entry.createdAt,
    expiry: entry.expiry,
    clickDetails: entry.clicks,
  });
};
