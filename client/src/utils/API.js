import axios from "axios";

export default {
    // Search Google Books
    searchBooks: function(searchTerm) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    },
    // Gets all books saved to MongoDB
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id from MongoDB
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id from MongoDB
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to MongoDB
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};