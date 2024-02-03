import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Cake.css'
import logo from './Bigbasket-image-01-800x400.jpg'
import c1 from './c1.webp'
import c2 from './c2.webp'
import c3 from './c3.webp'
import c4 from './c4.webp'
import c5 from './c5.webp'
import c6 from './c6.webp'

const Cake = () => {
  return (
    <>
    <div className='smart1'>
    <div className='cake1'>
     <Carousel >
      <Carousel.Item>
        <img src={c1}  width={1500} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c2}  width={1500} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c3}  width={1500} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c4}  width={1500} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c5}  width={1500} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c6}  width={1500} height={400}/>
      </Carousel.Item>
      </Carousel>
      </div>

      <div className='smart'>
      <h1>Dairy Items</h1>
    <Carousel >
      <Carousel.Item>
        <center>
      <Container >
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40259661_2-fresho-unsalted-butter-pasteurised.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Butter-Unsalted</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/1202684_3-amul-taaza-homogenised-toned-milk.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Toned Milk</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40262038_3-milky-mist-set-curd-creamy.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Curd</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/1203756_1-amul-malai-paneer.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Malai Paneer</Card.Title>
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
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40167237_3-amul-diced-cheese-blend.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Pizza Cheese Diced</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/1216315_1-so-good-plant-based-almond-beverage-unsweetened-rich-in-calcium-vitamins-vegan.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Almond Milk</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40314806_1-britannia-100-whole-wheat-sandwich-bread.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>wheat Sandwich Bread</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40214387_2-parle-rusk-real-elaichi.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Elaichi Rusk</Card.Title>
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

    <div className='smart'>
      <h1>Cakes & Pastries</h1>
    <Carousel >
      <Carousel.Item>
        <center>
      <Container >
      <Row> 
        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40204881_2-elite-dates-pudding-cake-sliced.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Pudding Cake-Sliced</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40202752_1-kabhi-b-chocolate-muffin.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Chocolate Muffin</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40316877_1-awsum-rich-plum-cake-premium-quality.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Plum Cake</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40312396_1-bran-o-eggless-tutti-fruiti-cupcakes.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Tutti-Fruiti Cupcakes</Card.Title>
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
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40198332_1-britannia-fudge-it-chocolate-brownie.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Chocolate Brownie</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40052061_3-elite-dreams-cup-cake-choco.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Cup Cake</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/l/1214506_2-open-secret-nutty-cookies-choco-almond-no-added-maida-40-50-nuts-box-of-6-cookies.jpg?tr=w-1080,q=80' />
      <Card.Body>
        <Card.Title>Almond Cookies</Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
      </Card>
        </Col>

        <Col xs={3}>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src='https://www.bigbasket.com/media/uploads/p/m/40204880_2-elite-banana-pudding-cake-sliced.jpg?tr=w-1920,q=80' />
      <Card.Body>
        <Card.Title>Banana Pudding Cake</Card.Title>
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
                <li><a href='/home'>Home</a></li>
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

export default Cake