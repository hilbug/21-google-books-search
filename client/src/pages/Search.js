import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, FormBtn } from "../components/Form";

const Search = () => {
    return (
        <Container>
            <Row>
                <Col>
                <form>
                <p>Search for a book here:</p>
                    <SearchBox 
                        //onChange={handleInputChange}
                        name="book search box"
                        placeholder="Book title"
                    />
                    <FormBtn>Search</FormBtn>
                </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;