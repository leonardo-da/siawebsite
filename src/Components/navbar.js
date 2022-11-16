import {Nav,Navbar,Container,Offcanvas} from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {[false].map((expand) => (
        <div class="fixed-top">
        <Navbar key={expand} variant="dark" bg="dark" expand={expand} className="py-4">
          <Container fluid className="mx-5">
            <Navbar.Brand as={Link} to="/">SIA</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SIA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Servicios">Servicios</Nav.Link>
                  <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
      <section><Outlet></Outlet></section>
    </>
  );
}

export default App;