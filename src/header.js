import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl } from "react-bootstrap"

export default function header() {
  return (
    <div className='m-0'>
        <Container fluid>
             <Navbar expand="lg" className='p-3'>
                    <Container fluid>
                        <Navbar.Brand>
                            <h4>DOTCRYPTO</h4>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto ms-5 mr-5 my-2 my-lg-0"
                                navbarScroll
                            >
                                <Nav.Link className="me-3 ms-lg-5 text-sm-center fw-bold" onClick={()=>{this.handleChooseMenu("about")}}>Product</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center fw-bold" onClick={()=>{this.handleChooseMenu("feature")}}>Template</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center fw-bold" onClick={()=>{this.handleChooseMenu("pricing")}}>Blog</Nav.Link>
                                <Nav.Link className="me-3 text-sm-center fw-bold" onClick={()=>{this.handleChooseMenu("testimonial")}}>Pricing</Nav.Link>
                            </Nav>
                            <div className="d-flex justify-content-around">
                                <button className="log-btn fw-bold" onClick={()=>{this.handleChooseMenu("signin")}}>Sign In</button>
                                <button className="log-btn selected fw-bold" onClick={()=>{this.handleChooseMenu("signup")}}>Sign up</button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
    </div>
  )
}
