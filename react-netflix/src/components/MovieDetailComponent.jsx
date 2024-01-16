import React from 'react'
import { useState,  useEffect } from 'react'
import { Container, Alert, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router';

export default function MovieDetailComponent(endpoint) {

    const params = useParams()

    const [movieDetail, setMovieDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    useEffect(()=>{
        fetch(endpoint+params.movieID)
        .then(response => response.json())
        .then(json => {
            setMovieDetail(json);
            setLoading(false)
            console.log(movieDetail)
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            setErrMsg(true)
        })
    }, [endpoint])

  return (
    <Container>
        {errMsg && 
            <Alert variant='danger'>
                Errore nel caricamento dati!
            </Alert>}

        {loading && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
    </Container>
  )
}
