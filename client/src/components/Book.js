import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import API from "../utils/API";
//import newlines from "../utils/helpers";

// Book details are in volumeInfo in the book object


const Book = ({ volumeInfo }) => {

    function handleBookSubmit(event) {
        event.preventDefault();
        if (volumeInfo.title) {
            API.saveBook(
                //bookData
                {
                    title: volumeInfo.title,
                    subtitle: volumeInfo.subtitle,
                    authors: volumeInfo.authors,
                    description: volumeInfo.description,
                    image: volumeInfo.imageLinks.thumbnail,
                    link: volumeInfo.infoLink
                }
            )
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    return (

        <Col md={12}>

            <Card className="mb-4 shadow-sm">
                {/* <Card.Img src={volumeInfo.imageLinks.thumbnail} variant="top" width="100%" height="225" alt="Book Cover" /> */}
                <Card.Body>
                    <Card.Title className="text-center">{volumeInfo.title}</Card.Title>
                    <Card.Subtitle className="text-center">{volumeInfo.subtitle}</Card.Subtitle>
                    <Card.Subtitle>{"Written By " + volumeInfo.authors}</Card.Subtitle>
                    <Card.Text><Image src={volumeInfo.imageLinks.thumbnail} alt="Book Cover" thumbnail />{volumeInfo.description || "No description provided by Google Books."}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                        <ButtonGroup aria-label="Project Links" >
                            <Button href={volumeInfo.infoLink} size="sm" variant="outline-secondary">
                                View
                        </Button>
                            <Button className="save-btn" size="sm" variant="outline-secondary" onClick={handleBookSubmit}>
                                Save
                        </Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Book;
// onClick={props.bookClicked}

/*
*
Props: id, title, subtitle, authors, description, thumbnail, infoLink
*
*/