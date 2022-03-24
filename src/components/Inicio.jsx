/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react';
import { Card, Col } from 'react-bootstrap';
import { todosPersonajes } from '../functions/functions';
import { episodioPersonaje } from '../functions/functions';


const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)

    useEffect(() => {
        todosPersonajes(setPersonajes)
    },[])

    return (
        <>

            {personajes!= null ? (
                personajes.map(personaje => (

                    <Col>
                    <Card style={{ width: '15rem'}}>
                            <div key={personaje.id}>

                                <Card.Img src={personaje.image} variant="top" alt=""/>
                            </div>

                            <div className='bg-secondary'>
                                <Card.Title className='px-2 '>
                                    <a href={`/personaje/${personaje.id}`} className="text-decoration-none text-white">{personaje.name}</a>
                                </Card.Title>
                                <Card.Text>
                                    <p className='px-4 text-white'>{personaje.status} - {personaje.species}</p>
                                    <p className='px-2 text-white'>Última ubicación conocida: {personaje.location.name}</p> 
                                </Card.Text> 
                             
                            </div>
                    </Card>
                    </Col>
                    
                ))

            ) : ('')} 
        </>
    );
}

export default Inicio

