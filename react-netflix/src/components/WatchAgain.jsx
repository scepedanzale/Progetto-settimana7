import React, { Component } from 'react'
import {Col, Image, Spinner, Alert} from 'react-bootstrap'

export default class WatchAgain extends Component {
    state = {
        films: [],
        isLoading: false,
        errorMsg: false
    }
    componentDidMount = async () => {

      try{
        this.setState({isLoading: true})
        const response = await fetch(this.props.endpoint+'alien')
        if(response.ok){
          const json = await response.json()
          this.setState({isLoading: false, films: json})
        }else{
          console.log('errore nel caricamento...')
          this.setState({isLoading: false, errorMsg: true})
        }
      }catch(e){
        console.log(e)
        this.setState({isLoading: false, errorMsg: true})
      }
    }
  render() {
    return (
      <>
      {this.state.isLoading &&
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
       }
      {this.state.errorMsg &&
        <Alert variant='danger'>
          Errore nel caricamento dati!
        </Alert>
      }
        {this.state.films.Search && this.state.films.Search.map(film => (
          <Col xs={12} sm={6} md={4} lg={2} className='my-4 text-center'>
              <Image className='image-card' src={film.Poster}></Image>
          </Col>
        ))}
      </>
    )
  }
}
