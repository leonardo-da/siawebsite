import { Card } from "react-bootstrap";

import COR from '../assets/img/mttocorr.png';
import PRE from '../assets/img/mttoprev.png';

const App = () =>{

  return(
    <>
    <div style={{marginTop:'6rem'}}>
      <h2 className="text-center pt-5">Mantenimiento para tus equipos de cómputo.</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={PRE} />
          <Card.Body>
            <Card.Title>Preventivo</Card.Title>
            <Card.Text>
              Has notado que tu equipo se ha vuelto más lento o que se calienta más de lo normal, un mantenimiento a tiempo podría evitar daños a futuro en tu equipo.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={COR} />
          <Card.Body>
            <Card.Title>Correctivo</Card.Title>
            <Card.Text>
              Tu equipo dejó de encender o tiene algún fallo que no te permite seguir usando tu equipo correctamente, al realizar mantenimiento a tu equipo buscaremos y repararemos la avería.             
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>


    <div style={{marginTop:'6rem'}}>
      <h2 className="text-center pt-5">Mantenimiento para tus impresoras.</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={PRE} />
          <Card.Body>
            <Card.Title>Preventivo</Card.Title>
            <Card.Text>
              Has notado que tu equipo se ha vuelto más lento o que se calienta más de lo normal, un mantenimiento a tiempo podría evitar daños a futuro en tu equipo.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={COR} />
          <Card.Body>
            <Card.Title>Correctivo</Card.Title>
            <Card.Text>
              Tu equipo dejó de encender o tiene algún fallo que no te permite seguir usando tu equipo correctamente, al realizar mantenimiento a tu equipo buscaremos y repararemos la avería.             
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>


    <div style={{marginTop:'6rem'}}>
      <h2 className="text-center pt-5">Servidores</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={PRE} />
          <Card.Body>
            <Card.Title>Preventivo</Card.Title>
            <Card.Text>
              Has notado que tu equipo se ha vuelto más lento o que se calienta más de lo normal, un mantenimiento a tiempo podría evitar daños a futuro en tu equipo.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={COR} />
          <Card.Body>
            <Card.Title>Correctivo</Card.Title>
            <Card.Text>
              Tu equipo dejó de encender o tiene algún fallo que no te permite seguir usando tu equipo correctamente, al realizar mantenimiento a tu equipo buscaremos y repararemos la avería.             
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>


    <div style={{marginTop:'6rem'}}>
      <h2 className="text-center pt-5">Camaras</h2>
      <div class="mt-5 d-flex justify-content-evenly mb-5">
        <Card  style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={PRE} />
          <Card.Body>
            <Card.Title>Preventivo</Card.Title>
            <Card.Text>
              Has notado que tu equipo se ha vuelto más lento o que se calienta más de lo normal, un mantenimiento a tiempo podría evitar daños a futuro en tu equipo.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '25rem' }}>
          <Card.Img className="w-75 mx-auto my-5" src={COR} />
          <Card.Body>
            <Card.Title>Correctivo</Card.Title>
            <Card.Text>
              Tu equipo dejó de encender o tiene algún fallo que no te permite seguir usando tu equipo correctamente, al realizar mantenimiento a tu equipo buscaremos y repararemos la avería.             
            </Card.Text>
          </Card.Body>
      </Card>
      </div>
    </div>

    </>


  );
}
export default App;