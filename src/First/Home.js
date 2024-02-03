import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import v1 from './10000067_23-fresho-capsicum-green.webp';
import v2 from './10000070_15-fresho-carrot-orange.webp';
import v3 from './10000074_19-fresho-cauliflower.webp';
import v4 from './10000326_14-fresho-coriander-leaves.webp';
import v5 from './40077518_1-fresho-cucumber.webp';
import v6 from './10000150_19-fresho-onion.webp';
import v7 from './10000142_17-fresho-ladies-finger.webp';
import v8 from './40048459_8-fresho-potato-new-crop.webp';
import logo from './Bigbasket-image-01-800x400.jpg'
import './Home.css'
import Placeholder from 'react-bootstrap/Placeholder';
import fv from './f&v.jpg'


const Home = () => {
  return (
    <>
     <div className='smart'>
    <img src={fv} width={1950} height={400}/>
   
    <div className='smart'>
      <h1>Smart Basket</h1>
    <Carousel >
      <Carousel.Item>
        <center>
      <Container >
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v1} />
      <Card.Body>
        <Card.Title>Capsicum-Green</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v2} />
      <Card.Body>
        <Card.Title>Carrot-orange</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v3} />
      <Card.Body>
        <Card.Title>Cauliflower</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v4} />
      <Card.Body>
        <Card.Title>Coriander-Leaves</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      </Container>
      </center>
      </Carousel.Item>

      <Carousel.Item>
      <center>
      <Container >
      <Row>
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v5} />
      <Card.Body>
        <Card.Title>Cucumber</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v6} />
      <Card.Body>
        <Card.Title>Onion</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v7} />
      <Card.Body>
        <Card.Title>Ladies Fingers</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v8} />
      <Card.Body>
        <Card.Title>Potatos</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      </Container>
      </center>
      </Carousel.Item>
    </Carousel>
    </div>

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
  )
}

export default Home