import React from 'react'
import {Nav, Navbar, Image} from 'react-bootstrap';

export default function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar-dark sticky-top shadow-lg pe-3" style={{backgroundColor: "#221f1f"}}>
        <Nav.Item>
          <Nav.Link className="navbar-brand" href="#">
            <Image src="../assets/logo.png" alt='logo'  style={{width: "100px", height: "55px"}}/>
          </Nav.Link>
        </Nav.Item>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
          <ul className="navbar-nav mr-auto ps-3">
            <Nav.Item>
              <Nav.Link className="font-weight-bold" href="#">Home <span className="sr-only">(current)</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-weight-bold" href="#">TV Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-weight-bold" href="#">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nfont-weight-bold" href="#">Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="font-weight-bold" href="#">My List</Nav.Link>
            </Nav.Item>
          </ul>
          <div className='d-flex justify-content-md-end my-3 my-md-0'>
            <Nav.Item>
              <Nav.Link>
                <i className="fa fa-search icons"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <div id="kids">KIDS</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <i className="fa fa-bell icons"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <i className="fa fa-user icons"></i>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Navbar.Collapse>
      </Navbar>
  )
}
