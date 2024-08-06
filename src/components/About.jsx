import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '/images/about-img.webp'

const About = () => {
  const firstItem = 82;
  const secondItem = 97;
  const thirdItem = 75;

  return (
    <section id="about" className='block about-block'>
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
            <div className='progress-block'>
              <h4>First Item</h4>
                <ProgressBar now={firstItem} label={`${firstItem}%`} />
            </div>
            <div className='progress-block'>
              <h4>Second Item</h4>
                <ProgressBar now={secondItem} label={`${secondItem}%`} />
            </div>
            <div className='progress-block'>
              <h4>Third Item</h4>
                <ProgressBar now={thirdItem} label={`${thirdItem}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About