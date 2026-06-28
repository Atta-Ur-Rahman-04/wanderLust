const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAcync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// review ----->
// post review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAcync(reviewController.createReview),
);

// Delete review route ---->
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAcync(reviewController.destroyReview),
);

module.exports = router;
