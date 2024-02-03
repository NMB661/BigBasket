import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Aboutus.css'
import { Container } from 'react-bootstrap'
import logo from './Bigbasket-image-01-800x400.jpg'

const Aboutus = () => {
  return (
    <>
    <div className='main2'>
     <Container>
        <h1 style={{marginTop:50,marginLeft:10,color:'green'}}>What is bigbasket?</h1>
        <p><strong >What is bigbasket.com</strong><br></br>
         bigbasket.com (Innovative Retail Concepts Private Limited) is India's largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats – we have it all.
        Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity. You can pay online using your debit / credit card or by cash / sodexo on delivery.
        We guarantee on time delivery, and the best quality! <br></br> 
        <strong>Happy Shopping!!</strong>
        </p>
        <hr></hr>
 <h1 style={{marginTop:50,marginLeft:10,color:'green'}}>Why should I shop at bigbasket?</h1>
        <p>
        bigbasket.com allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking , standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at bigbasket.com, India’s best online grocery store!
        </p>
     </Container>
    
    <section id='footer'>
        <containerfluid>
        <Row>
        <Col xs={3}>
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

export default Aboutus