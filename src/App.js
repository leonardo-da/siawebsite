import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/navbar";
import Index from "./Pages/firstpage";
import Servicios from "./Pages/servicios";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index/>}/>
            <Route path='servicios' element={<Servicios/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
