import { Card,Button,Modal,Form } from "react-bootstrap";
import React, { useState } from 'react';

import LogoTeam from "../assets/img/teamViewerLogo.png";
import LogoAny from "../assets/img/anydeskLogo.png";

const App = () =>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        console.log("a prro");
        window.location.href = "https://www.youtube.com/";
      }
  }

    return(
    <>
    <div style={{ marginTop:'7rem' }}>
    <div onClick={handleShow}>*</div>
      <div className="m-4">
        <h1 className="text-center">Bienvenido a soporte</h1>

        <div className="text-center mt-5">
          <h4 >¿Necesitas ayuda de forma remota?</h4>
          {/*<img src={LogoW} alt="Windows" className="w-25"></img>*/}
          <div class="row row-cols-2 g-4 mt-5 d-flex justify-content-evenly">
            <Card style={{ width: '18rem' }} className="border-primary">
            <Card.Img className="w-50 mx-auto d-block mt-2" variant="top" src={LogoTeam} />
              <Card.Body>
                <Card.Title>Teams Viewer</Card.Title>
                <Card.Text className="mb-4">
                  Soporte en remoto de ordenadores y otros dispositivos finales.
                </Card.Text>
                <Button variant="primary mx-2" href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" target="_blank">Windows</Button>
                <Button variant="primary mx-2" href="https://download.teamviewer.com/download/TeamViewer.dmg" target="_blank">Mac</Button>
              </Card.Body>
            </Card>
          <Card style={{ width: '18rem' }} className="border-danger">
            <Card.Img className="w-50 mx-auto d-block mt-2" variant="top" src={LogoAny} />
              <Card.Body>
                <Card.Title>Anydesk</Card.Title>
                <Card.Text className="mb-4">
                  Provee acceso remoto bidireccional entre computadoras personales.
                </Card.Text>
                <Button variant="danger mx-2" href="https://anydesk.com/es/downloads/thank-you?dv=win_exe" target="_blank">Windows</Button>
                <Button variant="danger mx-2" href="https://anydesk.com/es/downloads/thank-you?dv=mac_dmg" target="_blank">Mac</Button>
              </Card.Body>
          </Card>
        </div>    
        </div>
        </div>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Soporte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviarDatos}>
          <div class="d-flex justify-content-center">
            <input type="password" placeholder="Contraseña" className="form-control mt-2 mx-5 w-75" onChange={handleInputChange} name="password"/>
          </div>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >Cerrar</Button>
          <Button type="submit" className="btn btn-primary">Ingresar</Button>
        </Modal.Footer>
      </Modal>


    </div>
    </>
      
    );
}
export default App;