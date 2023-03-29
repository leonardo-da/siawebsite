import {Nav,Navbar,Container,Offcanvas,NavDropdown,Form,Button} from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../Pages/footer";
import React, { useState } from 'react';
import LogoNav from '../assets/img/navbarLogo.png';

const App = () => {

    const [datos, setDatos] = useState({
      password: ''
  })

  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }

  const enviarDatos = (event) => {
      event.preventDefault()
      if(datos.password === "Sia5678"){
        window.location.href = "https://www.serviciosinformaticosdeags.com/files/";
      }
  }
  

  const pathname = useLocation().pathname;
  return (
    <>
      {[false].map((expand) => (
        <div class="fixed-top">
        <Navbar key={expand} bg="black" variant="dark" expand={expand}>
          <Container fluid className="mx-5" >
            <Navbar.Brand as={Link} to="/" className="mt-2 ms-"><img alt="logo" src={LogoNav} style={{width:'50px'}}></img></Navbar.Brand>
            <Navbar.Toggle   />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand class="text-decoration-none text-white" as={Link} to="/"><img alt="logo" src={LogoNav} style={{width:'50px',filter:'invert(100%)'}}></img></Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={`${pathname === '/Servicios' ? 'text-decoration-underline fw-bold' : 'text-decoration-none'}`} as={Link} to="/Servicios">Servicios</Nav.Link>
                  <Nav.Link className={`${pathname === '/Productos' ? 'text-decoration-underline fw-bold' : 'text-decoration-none'}`} as={Link} to="/Productos">Productos</Nav.Link>
                  <Nav.Link className={`${pathname === '/Soporte' ? 'text-decoration-underline fw-bold' : 'text-decoration-none'}`} as={Link} to="/Soporte">Soporte</Nav.Link>
                  <Nav.Link className={`${pathname === '/Contacto' ? 'text-decoration-underline fw-bold' : 'text-decoration-none'}`} as={Link} to="/Contacto">Contacto</Nav.Link>
                  <NavDropdown title="Ingresar" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <Form className="d-flex">
                        <Form.Control onChange={handleInputChange} name="password" placeholder="Contraseña" className="mx-2" type="password" />
                        <Button variant="outline-success" className="me-2" onClick={enviarDatos}>Ingresar</Button>
                      </Form>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
      <section><Outlet></Outlet></section>
      <Footer/>
    </>
  );
}

export default App;