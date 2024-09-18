import { Container, Row, Stack, Image } from "react-bootstrap";
import Contacts from "../data";
import { Link } from "react-router-dom";

const ContactList = () => {
  return (
    <Container className="p-5">
      <Row>
        <h1>Contacts</h1>
        <p>Welcome to your contact list</p>
        <Stack gap={3}>
          {Contacts.map((Contact, index) => (
            <Link to={`contact/` + index}>
              <div className="p-3 contact-list-item">
                <Image src={Contact.photo} roundedCircle />
                <h2>{Contact.name}</h2>
              </div>
            </Link>
          ))}
        </Stack>
      </Row>
    </Container>
  );
};
export default ContactList;
