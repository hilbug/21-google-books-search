import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Book = (props) => {

    return (
        <Col md={12}>
            <Card className="mb-4 shadow-sm" page={props.page}>
                <Card.Body>
                    <Card.Title className="text-center">{props.data.title}</Card.Title>
                    <Card.Subtitle className="text-center">{props.data.subtitle}</Card.Subtitle>
                    <Card.Subtitle>{"Written By " + props.data.authors}</Card.Subtitle>
                    <Card.Text><Image src={props.data.imageLinks.thumbnail} alt="Book Cover" thumbnail /><br />{props.data.description || "No description provided by Google Books."}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center">
                        <ButtonGroup aria-label="Project Links" page={props.page}>
                            <Button href={props.data.infoLink} target="_blank" size="sm" variant="outline-secondary">
                                View
                            </Button>
                        {props.page === "search" ? 
                            <Button className="save-btn" size="sm" variant="outline-secondary" onClick={props.handleBookSubmit}>Save</Button> :
                            <Button className="del-btn" size="sm" variant="outline-secondary" onClick={props.handleBookDelete}>Delete</Button>}
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Book;
// onClick={props.bookClicked}
// prop for the page you're on... 

/*
*
Props: page, handleBookSubmit, handleBookDelete, id, title, subtitle, authors, description, thumbnail, infoLink

Book details are in volumeInfo in the book object
*
*/