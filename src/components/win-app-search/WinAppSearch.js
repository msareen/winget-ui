import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


function WinAppSearch(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform the search here, and set the results in state
    setSearchResults(['asd','asd']);
  };  
  
  return(
      <Container fluid>
      <Row className="mt-3">
        <Col>
          <h1>Search Page</h1>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="searchTerm">
              <Form.Label>Search Term</Form.Label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3">
        {searchResults.map((result) => (
          <Col key={result.id} xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{result.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}

export default WinAppSearch