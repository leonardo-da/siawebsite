import { Spinner } from "react-bootstrap";

const App = () =>{
    return(
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    );
}
export default App;