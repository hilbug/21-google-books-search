import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, FormBtn } from "../components/Form";
import API from "../utils/API";
import Book from "../components/Book";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState({});
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.searchBooks(searchTerm)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
            console.log(books);
        };
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <h2>Search for a book here:</h2>
                            <SearchBox
                                onChange={handleInputChange}
                                name="book search box"
                                placeholder="Keywords"
                            />
                            <FormBtn
                                onClick={handleFormSubmit}
                            >
                                Search
                    </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <section className="pt-5">
                <Container>
                    <h2>Search results</h2>
                    <Row>

                        {books
                            ? books.map((book) => (
                                <Book key={book.id} volumeInfo={book.volumeInfo} />
                            ))
                            : null}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Search;