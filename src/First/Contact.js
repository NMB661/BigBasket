import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './Bigbasket-image-01-800x400.jpg'
import './Contact.css'; 

const Contact = () => {
  
  return (
    <>
    <div className='main'>
    <Container className="contact-container">
      <h1 style={{textAlign:'center'}} id='h'>Contact Us</h1>
      <Form  className="contact-form">
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
         
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
       
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
        
            required
          />
        </Form.Group>

        <Button variant="success" type="submit" id='b'>
          Submit
        </Button>
      </Form>
    </Container>
  

<section id='footer'>
<containerfluid>
<Row>
<Col xs={3} >
<img src={logo} style={{width:300}}/>
</Col>
<Col xs={3}>
    <h2 >bigbasket</h2>
    <ul>
      <li> <a href='/home'>Home</a></li>
      <li><a href='/about'> AboutUs</a></li>
      <li><a href='/fv'>Fruits & Vegetables</a></li>
      <li> <a href='/cake'>Bakery,Cakes & Dairy</a></li>
    </ul>
</Col>
<Col xs={3}>
    <h2 >Popular Brands</h2>
    <ul>
        <li>Fresho</li>
        <li>BB Royal</li>
        <li>Amul</li>
        <li>Nestle</li>
        <li>Britannia</li>
    </ul>
</Col>
<Col xs={3}>
<h2 >Help</h2>
<ul>
    <li> <a href='/msg'>Contact Us</a></li>
    <li>FAQ's</li>
    </ul>
</Col>
</Row>
</containerfluid>
</section>
</div>
</>
  );
};

export default Contact;
