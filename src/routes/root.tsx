import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Root() {
  return (
    <Container fluid>
      <Row>
        <Col className="detail">
          <div id="detail">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
