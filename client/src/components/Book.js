import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
//import newlines from "../utils/helpers";

// Book details are in volumeInfo in the book object

const Book = ({ volumeInfo }, ...props) => (
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
                        <Button className="save-btn" size="sm" variant="outline-secondary" {...props}>
                            Save
                        </Button>
                    </ButtonGroup>
                </div>
            </Card.Body>
        </Card>
    </Col>
);

export default Book;

/*
*
Props: id, title, subtitle, authors, description, thumbnail, infoLink
*
*/