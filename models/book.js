const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    authors: {
        type: [String]
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// Set array as type in model?
// https://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index
// Type array, default: [] ??

// Mongoose Arrays
// https://masteringjs.io/tutorials/mongoose/array