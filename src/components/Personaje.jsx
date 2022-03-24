import React,{useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../functions/functions';

const Personaje = () => {
    const [personaje, setPersonaje] = useState(null)

    const params = useParams()
    useEffect(()=>{
        unicoPersonaje(params.id,setPersonaje) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        {personaje != null ? ( 
            
            
        <Col className="d-flex align-items-center">
            <Row>
                <img src={personaje.image} alt=""/>
            </Row>
            <Row className=" ms-2 ">
                <h1>{personaje.name}</h1>
                <p className='fs-5'>
                    Genero: {personaje.gender} <br />
                    Origen: {personaje.origin.name} <br />
                    Status: {personaje.status} <br />
                    Especie: {personaje.species}
                    
                </p>
            </Row>
        </Col>

        ) : ('')}
        </>
    );
}

export default Personaje