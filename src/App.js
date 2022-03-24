import { Container, Row } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'

function App() {
  return (
    <>

    <header>
      <navbar className="navbar navbar-light justify-content-center py-5 ">
        <div className="rounded-pill p-1 px-5 btn-outline-warning">
          <a className="navbar-brand fs-1 fw-bold font-monospace " href="https://rickandmortyapi.com/">Rick And Morty API</a>
        </div>
      </navbar>      
    </header>
    
      
    <Container className='p-5 bg-light' >  
      <Row md="auto" className="justify-content-center p-5 g-5 rounded-3">
        
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
            </Routes>
          </BrowserRouter>
        
      </Row>
    </Container>

    </>

  );
}

export default App;
