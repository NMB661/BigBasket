import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Table1.css'
import p1 from './3.jpg'
import p2 from './4.jpg'
import p4 from './6.jpg'
import p5 from './7.jpg'
import p6 from './8.jpg'
import p7 from './9.jpg'


const Slideshow = () => {

  return (
    <>
    <div className='tag'>
    <h1>Nature's Beauty</h1></div>
    <container>
      <center>
        <div className='img1'>
    <Carousel >
      <Carousel.Item>
        <img src={p1} width={600} height={400} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={p2} width={600} height={400} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={p4}  width={600} height={400}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={p5} width={600} height={400} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={p6} width={600} height={400} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={p7}  width={600} height={400}/>
      </Carousel.Item>
    </Carousel>
    </div>
    </center>
    </container>
    
    </>
  )
}

export default Slideshow