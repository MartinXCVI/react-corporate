import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact</h2>
          <div className="subtitle">
            Let&apos;s keep in touch
          </div>
        </div>
        <Form className="contact-form ">
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Your full name here" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Your phone number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Your message here" required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155423.65956892163!2d13.25988663371955!3d52.50638615157066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerl%C3%ADn%2C%20Alemania!5e0!3m2!1ses-419!2sar!4v1722907032011!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <FaEnvelope className='contact-icon' />
              example@something.com
            </li>
            <li>
              <FaPhoneAlt className='contact-icon' />
              123-456-7890
            </li>
            <li>
              <FaLocationDot className='contact-icon' />
              City Name, Country
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Contact