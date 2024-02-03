import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import v1 from './10000067_23-fresho-capsicum-green.webp';
import v2 from './10000070_15-fresho-carrot-orange.webp';
import v3 from './10000074_19-fresho-cauliflower.webp';
import v4 from './10000326_14-fresho-coriander-leaves.webp';
import f1 from './f1.webp';
import f2 from './f2.webp';
import f3 from './f3.webp';
import f4 from './f4.webp';
import f5 from './f5.webp';
import f6 from './f6.webp';
import f7 from './f7.webp';
import f8 from './f8.webp';
import logo1 from './iStock-1128687123-e1586349308238.jpg'
import logo from './Bigbasket-image-01-800x400.jpg'

const FV = () => {
  return (
    <>
    <div className='smart'>
    <img src={logo1} width={1950} height={500} style={{overflowX:'hidden'}}/>
    <center>
    <Container >
      <br></br>
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f1} />
      <Card.Body>
        <Card.Title>Orange</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f2} />
      <Card.Body>
        <Card.Title>Banana</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem', height:'22.5rem' }}>
      <Card.Img variant="top" src={f3} />
      <Card.Body>
        <br></br><br></br><br></br>
        <Card.Title>Promegranate</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f4} />
      <Card.Body>
        <Card.Title>Coconut</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>

      <br></br><br></br><br></br>
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f5} />
      <Card.Body>
        <Card.Title>Apple</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f6} />
      <Card.Body>
        <Card.Title>Kiwi-Green</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem', height:'22.5rem' }}>
      <Card.Img variant="top" src={f7} />
      <Card.Body>
      
        <Card.Title>Watermelon</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={f8} />
      <Card.Body>
        <Card.Title>Guava</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      
      <br></br><br></br><br></br>
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v1} />
      <Card.Body>
        <Card.Title>Capsicum-Green</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v2} />
      <Card.Body>
        <Card.Title>Carrot-orange</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v3} />
      <Card.Body>
        <Card.Title>Cauliflower</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={v4} />
      <Card.Body>
        <Card.Title>Coriander-Leaves</Card.Title>
        <Button variant="danger">Add</Button>
      </Card.Body>
      </Card>
        </Col>
      </Row>
      </Container>
      </center>
     

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

export default FV