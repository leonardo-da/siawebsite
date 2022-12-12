import {Carousel} from "react-bootstrap"

import ensamble from "../assets/img/ensamble.jpg";
import redes from "../assets/img/redes.jpg";
import impresora from "../assets/img/impresora.jpg";

const App = () => {
  return (
    <>
    <div style={{ marginTop:'10rem' }} className="mb-4">
      <Carousel fade className="w-75 mx-auto" >
        <Carousel.Item>
          <img className="d-block w-100" src={ensamble} alt="Ensamble"/>
          <Carousel.Caption>
            <h3 >PC</h3>
            <p>Ensamble, reparación de equipos de computo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={redes} alt="Redes"/>
          <Carousel.Caption>
            <h3>REDES</h3>
            <p>Diseño, instalación y configuracion de redes informaticas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={impresora} alt="Impresoras"/>
          <Carousel.Caption>
            <h3>IMPRESORAS</h3>
            <p>Mantenimiento, reparación y consumibles para su impresora.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </>
  );
}

export default App;
