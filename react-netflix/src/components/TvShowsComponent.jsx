import React, { useEffect,  useState} from 'react'
import {Container, Row, Col, Card, Button, Spinner, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function TvShowsComponent({endpoint}) {

    const navigate = useNavigate()

    const [movies, setMovies] = useState({});
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(()=>{
        setLoading(true)

        fetch(endpoint + 'shark')
        .then(response => response.json())
        .then(json => {
            setMovies(json);
            setLoading(false)
            console.log(json)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            setErrMsg(true)
        })
    }, [endpoint])

  return (
    <Container fluid>
        <h1>Tv Shows</h1>
        {errMsg && 
                <Alert variant='danger'>
                    Errore nel caricamento dati!
              </Alert>
            }

            {loading && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

        <Row className='p-5'>
            {movies.Search && movies.Search.map((movie)=>(
                <Col key={movie.id} xs={12} sm={6} md={4} lg={2} className='my-4 text-center'>
                    {console.log(movie.imdbID)}
                    <Card>
                        <Card.Img variant="top" src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant='outline-dark' onClick={()=> navigate('/movie-detail/'+ movie.imdbID)}>Vedi dettagli</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
