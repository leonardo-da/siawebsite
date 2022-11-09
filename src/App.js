import './App.css';
import {Nav,Navbar,Container,Carousel} from "react-bootstrap"

import ensamble from "./assets/img/ensamble.jpg";
import redes from "./assets/img/redes.jpg";
import impresora from "./assets/img/impresora.jpg";

const App = () => {
  return (
    <div className="App">
    <Navbar bg="white" expand="md">
    <Container>
      <Navbar.Brand href="#home">SIA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Servicios</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <Nav.Link href="#link">Soporte</Nav.Link>
          <Nav.Link href="#link">Seguridad</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  <Carousel fade className="w-75 position-absolute top-50 start-50 translate-middle">
      <Carousel.Item>
        <img className="w-100 col" src={ensamble} alt="First slide"/>
        <Carousel.Caption>
          <h3 >PC</h3>
          <p>Ensamble, reparación de equipos de computo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={redes} alt="Second slide"/>
        <Carousel.Caption>
          <h3>REDES</h3>
          <p>Diseño, instalación y configuracion de redes informaticas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={impresora} alt="Third slide"/>
        <Carousel.Caption>
          <h3>IMPRESORAS</h3>
          <p>Mantenimiento, reparación y consumibles para su impresora.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;
