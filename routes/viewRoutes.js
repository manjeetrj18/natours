const express = require("express");

const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

// Routes
router.get(
  "/",
  bookingController.createBookingCheckout,
  authController.isLogedIn,
  viewsController.getOverview
);
router.get("/tour/:slug", authController.isLogedIn, viewsController.getTour);
router.get("/login", authController.isLogedIn, viewsController.getLoginForm);
router.get("/me", authController.protect, viewsController.getAccount);

router.get("/my-tours", authController.protect, viewsController.getMyTours);

router.get(
  "/submit-user-data",
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
