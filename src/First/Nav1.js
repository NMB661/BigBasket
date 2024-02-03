import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Nav1.css'
const Nav1 = () => {
  return (
    <>
    <Navbar expand="lg"  style={{height:90,backgroundColor:'rgb(162, 205, 98)'}}>
      <Container fluid >
        <div className='title'>
        <Navbar.Brand href="#"> <span>big</span>basket</Navbar.Brand></div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav> 
            <Nav.Link href="/home" style={{paddingRight:20}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{paddingRight:20}}>About Us</Nav.Link>
            <NavDropdown title="Shop By Category" id="navbarScrollingDropdown"style={{paddingRight:20}} >
              <NavDropdown.Item href="/fv">Fruits &Vegetables</NavDropdown.Item>
              <NavDropdown.Item href="/cake">Bakery, Cakes & Dairy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/msg" >Contact Us</Nav.Link>
            <NavDropdown title="Tasks" id="navbarScrollingDropdown"style={{paddingRight:20}} >
              <NavDropdown.Item href="/task1">Task1(useEffect)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex" style={{paddingRight:0}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Nav1