const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// Get google book??
// https://developers.google.com/books/docs/v1/using
// "You can perform a volumes search by sending an HTTP GET request to the following URI:"

module.exports = router;

// Week 21 Activity 05
