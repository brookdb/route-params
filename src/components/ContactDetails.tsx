import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Contacts from "../data";

const ContactDetails = () => {
  const contact = Contacts[0];

  return (
    <Container className="p-5">
      <Row>
        <Col>
          <Link to={"/"}>Back</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
            </Card.Body>
            <Card.Img variant="middle" src={contact.photo} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Phone: {contact.number}</ListGroup.Item>
              <ListGroup.Item>Email: {contact.email}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ContactDetails;
