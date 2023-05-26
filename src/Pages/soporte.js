import { Card,Button} from "react-bootstrap";



import LogoTeam from "../assets/img/teamViewerLogo.png";
import LogoAny from "../assets/img/anydeskLogo.png";

const App = () =>{
    return(
    <>
    <div style={{ marginTop:'9rem' }} className="mb-5">
      <div className="m-4">
        <h1 className="text-center">Bienvenido a soporte</h1>

        <div className="text-center mt-5">
          <h4 >¿Necesitas ayuda de forma remota?</h4>
          <div class="row row-cols-2 g-4 mt-5 d-flex justify-content-evenly">
            <Card data-aos="zoom-in" style={{ width: '18rem' }} className="border-primary">
            <Card.Img className="w-50 mx-auto d-block mt-3" variant="top" src={LogoTeam} />
              <Card.Body>
                <Card.Title>Teamviewer</Card.Title>
                <Card.Text className="mb-4">
                  Soporte en remoto de ordenadores y otros dispositivos finales.
                </Card.Text>
                <Button variant="primary mx-2" href="https://www.teamviewer.com/latam/download/windows/" target="_blank">Windows</Button>
                <Button variant="primary mx-2" href="https://www.teamviewer.com/latam/download/macos/" target="_blank">Mac</Button>
              </Card.Body>
            </Card>
          <Card data-aos="zoom-in" style={{ width: '18rem' }} className="border-danger">
            <Card.Img className="w-50 mx-auto d-block mt-3" variant="top" src={LogoAny} />
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
    </div>
    </>
      
    );
}
export default App;