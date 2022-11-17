import { Card,Button } from "react-bootstrap";

import LogoTeam from "../assets/img/teamViewerLogo.png";
import LogoAny from "../assets/img/anydeskLogo.png";

const App = () =>{
    return(
    <>
    <div style={{ marginTop:'7rem' }}>
      <div className="m-5">
        <h1>Bienvenido a soporte</h1>

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
    </div>
    </>
      
    );
}
export default App;