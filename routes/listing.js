const express = require("express");
const router = express.Router();
const wrapAcync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAcync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAcync(listingController.createListing),
  );

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get("/search", wrapAcync(listingController.searchListings));

router
  .route("/:id")
  .get(wrapAcync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAcync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAcync(listingController.destroyListing));

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAcync(listingController.renderEditForm),
);

module.exports = router;
